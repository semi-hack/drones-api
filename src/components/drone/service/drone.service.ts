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

@Injectable()
export class DroneService extends RootService<Drone> {
  constructor(
    @InjectRepository(Drone)
    private readonly droneRepo: Repository<Drone>,
  ) {
    super(droneRepo);
  }

  async create(input: CreateDroneInput): Promise<Drone> {
    const drone = this.constructEntityInstance(Drone, {
      ...input,
    });

    return this.droneRepo.save(drone);
  }
}
