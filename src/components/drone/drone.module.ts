import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Drone } from './entities/drone.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Drone]),
  ],
  providers: [],
  controllers: [],
  exports: [],
})
export class DroneModule {}
