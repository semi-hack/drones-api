import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Medication } from './entities/medication.entity';
import { MedicationService } from './service/medication.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Medication]),
  ],
  providers: [MedicationService],
  controllers: [],
  exports: [MedicationService],
})
export class MedicationModule {}
