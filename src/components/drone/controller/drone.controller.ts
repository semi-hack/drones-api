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
import { CreateDroneDto } from '../dto/drone.dto';
import { DroneService } from '../service/drone.service';
import { SuccessResponse } from 'src/shared/utils/response.utils';
import { AddMedicationInput } from '../interface/drone.interface';


@Controller('v1/drones')
export class DroneController {
  constructor(private readonly droneService: DroneService) {}

  @Post()
  async create(
    @Body() body: CreateDroneDto,
  ) {
    const result = await this.droneService.create(body);
    return SuccessResponse('drone added successfully', result);
  }

  @Get('/health/:id')
  async fetchBatteryHealth(
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    const result = await this.droneService.resolveBatteryLevel(id);
    return SuccessResponse('successful', { health: result });
  }

  @Get('/available')
  async fetchAvailableDrones(
    @Req() req: any,
  ) {
    const result = await this.droneService.findIdleDrones();
    return SuccessResponse('successful', result);
  }

  @Put('/loading/:id')
  async SetLoading(
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    const result =  await this.droneService.setDroneStateLoading(id);
    return SuccessResponse('Successful', result);
  }

  @Put('/load/:id')
  async LoadDrone(
    @Param('id', ParseUUIDPipe) id: string,
    @Body() body: AddMedicationInput,
  ) {
    const result =  await this.droneService.loadDrone(id, body.medications);
    return SuccessResponse('Successful', result);
  }

  @Get(':id')
  async fetchLoadedMedication(
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    const result = await this.droneService.getLoadedMedication(id);
    return SuccessResponse('Successful', result);
  }

}
