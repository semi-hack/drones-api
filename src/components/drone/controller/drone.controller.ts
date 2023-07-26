import {
  Body,
  Controller,
  Get,
  Param,
  ParseUUIDPipe,
  Patch,
  Post,
  Req,
  UploadedFile,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common';
import { CreateDroneDto } from '../dto/drone.dto';
import { DroneService } from '../service/drone.service';
import { SuccessResponse } from 'src/shared/utils/response.utils';


@Controller('v1/drones')
export class DroneController {
  constructor(private readonly droneService: DroneService) {}

  @Post()
  async create(
    @Req() req: any,
    @Body() body: CreateDroneDto,
  ) {
    const result = await this.droneService.create(body);
    return SuccessResponse('drone added successfully', result);
  }

  @Get('/health/:id')
  async fetchBatteryHealth(
    @Req() req: any,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    const result = await this.droneService.resolveBatteryLevel(id);
    return SuccessResponse('successful', { health: result });
  }

  @Get('/available')
  async fetchAvailableDrones(
    @Req() req: any,
    @Param('id', ParseUUIDPipe) id: string,
  ) {
    const result = await this.droneService.findIdleDrones();
    return SuccessResponse('successful', result);
  }
}
