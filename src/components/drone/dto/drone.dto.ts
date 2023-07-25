import { IsEnum, IsNumber, IsString, Min, Length, Max } from "class-validator";
import { joinEnumValues } from "../../../shared/utils/enum.utils";
import { DroneModel, DroneState } from "../enum/drone.enum";


export class CreateDroneDto {

    @IsString()
    @Length(5, 100)
    serialNumber: string;

    @IsEnum(DroneModel, {
        message: `model must be one of ${joinEnumValues(DroneModel)}`
    })
    model: DroneModel;

    @IsNumber()
    @Max(500)
    weight: number;

    @IsNumber()
    battery: number;

    @IsEnum(DroneState, {
        message: `state must be one of ${joinEnumValues(DroneState)}`
    })
    state: DroneState;
}
