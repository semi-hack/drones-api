import { Exclude, Expose } from 'class-transformer';
import {
  BeforeInsert,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DroneModel, DroneState } from '../enum/drone.enum';


@Entity('drones')
export class Drone {
  @Expose({ name: 'uuid' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'varchar', length: 100  })
  serialNumber: string;

  @Column({ type: 'varchar', enum: DroneModel })
  model: string;

  @Column({ type: 'integer' })
  weight: number;

  @Column({ type: 'integer' })
  battery: number;

  @Column({ type: 'varchar', enum: DroneState, default: DroneState.IDLE })
  state: string;

  @CreateDateColumn({ type: 'date', default: null })
  createdAtDateOnly: Date;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;

  @BeforeInsert()
  setCreatedAtDateOnly() {
    this.createdAtDateOnly = new Date();
  }
}
