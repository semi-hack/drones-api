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
import { Medication } from '../entities/medication.entity';
import { CreateMedicationInput } from '../interface/medication.interface';

@Injectable()
export class MedicationService extends RootService<Medication> {
  constructor(
    @InjectRepository(Medication)
    private readonly medicationRepo: Repository<Medication>,
  ) {
    super(medicationRepo);
  }

  async create(input: CreateMedicationInput): Promise<Medication> {
    const medication = this.constructEntityInstance(Medication, {
      ...input,
    });

    return this.medicationRepo.save(medication);
  }

  async findByIds(ids: string[]): Promise<Medication[]> {
    const medications = await this.medicationRepo.findByIds(ids);

    if (medications.length !== ids.length) {
        throw new NotFoundException('One or more medications not found.')
    }

    return medications;
  }
}
