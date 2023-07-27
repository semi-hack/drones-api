import { forwardRef, Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MedicationController } from './controller/medication.controller';
import { Medication } from './entities/medication.entity';
import { MedicationService } from './service/medication.service';


@Module({
  imports: [
    TypeOrmModule.forFeature([Medication]),
  ],
  providers: [MedicationService],
  controllers: [MedicationController],
  exports: [MedicationService],
})
export class MedicationModule {}
