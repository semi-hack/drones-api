import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import SeederManager from '../../shared/utils/seeder-manager';
import { Drone } from '../../components/drone/entities/drone.entity';
import { DroneModel, DroneState } from '../../components/drone/enum/drone.enum';

const data = [
  {
    'serialNumber': '123456abcde',
    'model': DroneModel.LIGHTWEIGHT,
    'weight': 200,
    'battery': 20,
    'state': DroneState.IDLE
  },
  {
    'serialNumber': '2345671bcdae',
    'model': DroneModel.LIGHTWEIGHT,
    'weight': 200,
    'battery': 50,
    'state': DroneState.DELIVERED
  },
  {
    'serialNumber': '987654poqrs',
    'model': DroneModel.LIGHTWEIGHT,
    'weight': 200,
    'battery': 100,
    'state': DroneState.IDLE
  },
  {
    'serialNumber': '56789oiuyt',
    'model': DroneModel.MIDDLEWEIGHT,
    'weight': 300,
    'battery': 24,
    'state': DroneState.IDLE
  },
  {
    'serialNumber': '091234cvbnm',
    'model': DroneModel.MIDDLEWEIGHT,
    'weight': 300,
    'battery': 50,
    'state': DroneState.IDLE
  },
  {
    'serialNumber': '45678tesud',
    'model': DroneModel.MIDDLEWEIGHT,
    'weight': 300,
    'battery': 99,
    'state': DroneState.IDLE
  },
  {
    'serialNumber': '89123tyxcs',
    'model': DroneModel.CRUISERWEIGHT,
    'weight': 400,
    'battery': 10,
    'state': DroneState.IDLE
  },
  {
    'serialNumber': '45678truop',
    'model': DroneModel.CRUISERWEIGHT,
    'weight': 400,
    'battery': 90,
    'state': DroneState.DELIVERING
  },
  {
    'serialNumber': '32167dfghk',
    'model': DroneModel.HEAVYWEIGHT,
    'weight': 500,
    'battery': 20,
    'state': DroneState.RETURNING
  },
  {
    'serialNumber': '1234567oiub',
    'model': DroneModel.HEAVYWEIGHT,
    'weight': 500,
    'battery': 100,
    'state': DroneState.IDLE
  },
];

export default class NewSeeder
  extends SeederManager
  implements Seeder
{
  constructor() {
    super(Drone, data);
  }

  public async run(factory: Factory, connection: Connection): Promise<any> {
    await this.exec('1690372189879-Drones.ts', connection);
  }
}
