import { IsNumber, IsString, Matches } from "class-validator";


export class CreateMedicationDto {

    @IsString()
    @Matches(/^[A-Za-z0-9_-]+$/, {
        message: `name must be only  letters, numbers, ‘-‘, ‘_’`
    })
    name: string;

    @IsNumber()
    weight: number;

    @IsString()
    @Matches(/^[A-Z0-9_]+$/, {
        message: `code must be only upper case letters, underscore and numbers`
    })
    code: string;

    @IsString()
    image: string;
}
