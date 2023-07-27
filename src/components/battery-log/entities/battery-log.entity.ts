import { Expose } from 'class-transformer';
import { Drone } from '../../drone/entities/drone.entity';
import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';


@Entity('battery_logs')
export class BatteryLog {
  @Expose({ name: 'uuid' })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ type: 'integer' })
  percentage: number;

  @ManyToOne(() => Drone, drone => drone.batteryLogs)
  drone: Drone;

  @CreateDateColumn({ type: 'timestamptz' })
  createdAt: Date;

  @UpdateDateColumn({ type: 'timestamptz' })
  updatedAt: Date;
}
