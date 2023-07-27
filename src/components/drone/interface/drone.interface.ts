import { DroneModel, DroneState } from "../enum/drone.enum";

export interface CreateDroneInput {
    serialNumber: string;
    model: DroneModel;
    weight: number;
    battery: number;
    state?: DroneState;
}

export interface AddMedicationInput {
    medications: string[];
}