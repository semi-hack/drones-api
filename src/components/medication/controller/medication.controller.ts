import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Put,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { SuccessResponse } from 'src/shared/utils/response.utils';
import { CreateMedicationDto } from '../dto/medication.dto';
import { MedicationService } from '../service/medication.service';

@Controller('v1/medications')
export class MedicationController {
  constructor(private readonly medicationService: MedicationService) {}

  @Post()
  async create(
    @Body() body: CreateMedicationDto,
  ) {
    const result = await this.medicationService.create(body);
    return SuccessResponse('medication added successfully', result);
  }

  @Get()
  async fetchMedications() {
    const result = await this.medicationService.find();
    return SuccessResponse('successful', { health: result });
  }
}
