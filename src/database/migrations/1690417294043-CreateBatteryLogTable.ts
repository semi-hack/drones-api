import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateBatteryLogTable1690417294043 implements MigrationInterface {
    name = 'CreateBatteryLogTable1690417294043'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "battery_logs" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "percentage" integer NOT NULL, "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_0f1adc495e15b78684461a42198" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "battery_logs"`);
    }

}
