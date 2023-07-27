import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DroneModule } from '../drone/drone.module';
import { BatteryLog } from './entities/battery-log.entity';
import { BatteryLogService } from './service/battery-log.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([BatteryLog]),
    forwardRef(() => DroneModule),
  ],
  providers: [BatteryLogService],
  exports: [BatteryLogService],
})
export class BatteryLogModule {}
