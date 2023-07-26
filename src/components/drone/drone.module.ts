import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicationModule } from '../medication/medication.module';
import { DroneController } from './controller/drone.controller';
import { Drone } from './entities/drone.entity';
import { DroneService } from './service/drone.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Drone]),
    forwardRef(() => MedicationModule),
  ],
  providers: [DroneService],
  controllers: [DroneController],
  exports: [DroneService],
})
export class DroneModule {}
