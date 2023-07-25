import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateDroneTable1690304059897 implements MigrationInterface {
    name = 'CreateDroneTable1690304059897'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "drones" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "serialNumber" character varying(100) NOT NULL, "model" character varying NOT NULL, "weight" integer NOT NULL, "battery" integer NOT NULL, "state" character varying NOT NULL DEFAULT 'idle', "createdAtDateOnly" date DEFAULT now(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_3137fc855d37186eeccd193569f" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "drones"`);
    }

}
