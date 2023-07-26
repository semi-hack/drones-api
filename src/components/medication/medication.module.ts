import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medication } from './entities/medication.entity';


@Module({
  imports: [
    TypeOrmModule.forFeature([Medication]),
  ],
  providers: [],
  controllers: [],
  exports: [],
})
export class MedicationModule {}
