import { Factory, Seeder } from 'typeorm-seeding';
import { Connection } from 'typeorm';
import SeederManager from '../../shared/utils/seeder-manager';
import { Medication } from '../../components/medication/entities/medication.entity';

const data = [
  {
    "name":"Ampliclox",
    "weight": 300,
    "code":"90RS",
    "image":"https://res.cloudinary.com/duqphnggn/image/upload/v1690363760/drug_zbpu9m.jpg"
  },
  {
    "name":"Paracetamol",
    "weight": 40,
    "code":"Y9U1",
    "image":"https://res.cloudinary.com/duqphnggn/image/upload/v1690363760/drug_zbpu9m.jpg"
  },
  {
    "name":"Injection",
    "weight": 50,
    "code":"CV9O",
    "image":"https://res.cloudinary.com/duqphnggn/image/upload/v1690363760/drug_zbpu9m.jpg"
  },
  {
    "name":"Gause",
    "weight": 45,
    "code":"R05T",
    "image":"https://res.cloudinary.com/duqphnggn/image/upload/v1690363760/drug_zbpu9m.jpg"
  },
  {
    "name":"Syringe",
    "weight": 25,
    "code":"0WET",
    "image":"https://res.cloudinary.com/duqphnggn/image/upload/v1690363760/drug_zbpu9m.jpg"
  },
  {
    "name":"Panadol",
    "weight": 120,
    "code":"67XD",
    "image":"https://res.cloudinary.com/duqphnggn/image/upload/v1690363760/drug_zbpu9m.jpg"
  },
  {
    "name":"Gloves",
    "weight": 10,
    "code":"P0E5",
    "image":"https://res.cloudinary.com/duqphnggn/image/upload/v1690363760/drug_zbpu9m.jpg"
  },
  {
    "name":"Plaster",
    "weight": 5,
    "code":"V89T",
    "image":"https://res.cloudinary.com/duqphnggn/image/upload/v1690363760/drug_zbpu9m.jpg"
  },
  {
    "name":"Codine",
    "weight": 15,
    "code":"S45O",
    "image":"https://res.cloudinary.com/duqphnggn/image/upload/v1690363760/drug_zbpu9m.jpg"
  },
  {
    "name":"Expectorant",
    "weight": 120,
    "code":"T8IO",
    "image":"https://res.cloudinary.com/duqphnggn/image/upload/v1690363760/drug_zbpu9m.jpg"
  },
  {
    "name":"Difuser",
    "weight": 100,
    "code":"RED9",
    "image":"https://res.cloudinary.com/duqphnggn/image/upload/v1690363760/drug_zbpu9m.jpg"
  },
];

export default class NewSeeder
  extends SeederManager
  implements Seeder
{
  constructor() {
    super(Medication, data);
  }

  public async run(factory: Factory, connection: Connection): Promise<any> {
    await this.exec('1690361414026-Medications.ts', connection);
  }
}
