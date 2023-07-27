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
import { Cron } from '@nestjs/schedule';
import { BatteryLog } from '../entities/battery-log.entity';
import { CreateBatteryLogInput } from '../interface/battery-log.interface';
import { DroneService } from 'src/components/drone/service/drone.service';

@Injectable()
export class BatteryLogService extends RootService<BatteryLog> {
  constructor(
    @InjectRepository(BatteryLog)
    private readonly logRepo: Repository<BatteryLog>,
    @Inject(forwardRef(() => DroneService))
    private readonly droneService: DroneService,
  ) {
    super(logRepo);
  }

  async create(input: CreateBatteryLogInput): Promise<BatteryLog> {
    const log = this.constructEntityInstance(BatteryLog, {
      percentage: input.percentage,
      droneId: input.droneId
    });

    return this.logRepo.save(log);
  }

  @Cron('0 * * * *') // Run every hour
  async checkBatteryLevels() {
    const drones = await this.droneService.find();

    for (const drone of drones) {
      const batteryPercentage = drone.battery;
      await this.logBatteryLevel(drone.id, batteryPercentage);
    }
  }

  async logBatteryLevel(id: string, batteryPercentage: number) {
    await this.create({
        percentage: batteryPercentage,
        droneId: id
    });
  }

}
