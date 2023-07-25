import {
  Body,
  Controller,
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
    const drone = await this.droneService.create(body);
    return SuccessResponse('drone added successfully', drone);
  }
}
