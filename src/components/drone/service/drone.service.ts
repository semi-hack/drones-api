import {
  BadRequestException,
  Injectable,
  forwardRef,
  Inject,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RootService } from '../../../shared/classes/root-service/root-service';
import { Repository } from 'typeorm';
import { Drone } from '../entities/drone.entity';
import { CreateDroneInput } from '../interface/drone.interface';
import { DroneState } from '../enum/drone.enum';
import { MedicationService } from '../../medication/service/medication.service';
import { Medication } from '../../medication/entities/medication.entity';

@Injectable()
export class DroneService extends RootService<Drone> {
  constructor(
    @InjectRepository(Drone)
    private readonly droneRepo: Repository<Drone>,
    @Inject(forwardRef(() => MedicationService))
    private readonly medicationService: MedicationService,
  ) {
    super(droneRepo);
  }

  async create(input: CreateDroneInput): Promise<Drone> {
    const drone = this.constructEntityInstance(Drone, {
      ...input,
    });

    return this.droneRepo.save(drone);
  }

  async find(): Promise<Drone[]> {
    return this.droneRepo.find({});
  }

  async findIdleDrones(): Promise<Drone[]> {
    return this.droneRepo.find({ where: { state: DroneState.IDLE } });
  }

  async resolveBatteryLevel(id: string): Promise<number> {
    const drone = await this.droneRepo.findOne({ where: { id } });

    return drone.battery;
  }

  async loadDrone(id: string, medicationIds: string[]): Promise<Drone> {
    const drone = await this.droneRepo.findOne(id);
    if (!drone) {
      throw new NotFoundException('Drone not found.');
    }

    const medications = await this.medicationService.findByIds(medicationIds);

    if (medications.length !== medicationIds.length) {
      throw new NotFoundException('One or more medications not found.');
    }

    const totalWeight = medications.reduce((acc, med) => acc + med.weight, 0);
    if (totalWeight > drone.weight) {
      throw new BadRequestException('Total weight of medications exceeds the drone\'s weight limit.');
    }

    drone.medications = medications;
    drone.state = 'LOADED';

    return this.droneRepo.save(drone);
  }

  async getLoadedMedication(id: string): Promise<Medication[]> {
    const drone = await this.droneRepo.findOne(id, {
      relations: ['medications'],
    });

    if (!drone) {
      throw new NotFoundException('Drone not found.');
    }

    return drone.medications;
  }

  async setDroneStateLoading(id: string): Promise<Drone> {
    const drone = await this.droneRepo.findOne(id);
    if(!drone) {
        throw new NotFoundException('Drone not found.');
    }

    if (drone.state != DroneState.IDLE) {
        throw new BadRequestException('Only idle drones can be set to loading')
    }

    if (drone.battery < 25) {
        throw new BadRequestException('Drone battery below 25%, please charge')
    }

    drone.state = 'LOADING';

    return this.droneRepo.save(drone);
  }
}
