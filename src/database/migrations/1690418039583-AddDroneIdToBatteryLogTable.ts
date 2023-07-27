import {MigrationInterface, QueryRunner} from "typeorm";

export class AddDroneIdToBatteryLogTable1690418039583 implements MigrationInterface {
    name = 'AddDroneIdToBatteryLogTable1690418039583'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "battery_logs" DROP CONSTRAINT "FK_7ecd0a18796b14d429968e3b71e"`);
        await queryRunner.query(`ALTER TABLE "battery_logs" ALTER COLUMN "droneId" SET NOT NULL`);
        await queryRunner.query(`ALTER TABLE "battery_logs" ADD CONSTRAINT "FK_7ecd0a18796b14d429968e3b71e" FOREIGN KEY ("droneId") REFERENCES "drones"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "battery_logs" DROP CONSTRAINT "FK_7ecd0a18796b14d429968e3b71e"`);
        await queryRunner.query(`ALTER TABLE "battery_logs" ALTER COLUMN "droneId" DROP NOT NULL`);
        await queryRunner.query(`ALTER TABLE "battery_logs" ADD CONSTRAINT "FK_7ecd0a18796b14d429968e3b71e" FOREIGN KEY ("droneId") REFERENCES "drones"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
