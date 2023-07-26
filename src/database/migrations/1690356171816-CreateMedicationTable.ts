import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateMedicationTable1690356171816 implements MigrationInterface {
    name = 'CreateMedicationTable1690356171816'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "medications" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "name" character varying NOT NULL, "weight" integer NOT NULL, "code" character varying NOT NULL, "image" character varying NOT NULL, "createdAtDateOnly" date DEFAULT now(), "createdAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(), CONSTRAINT "PK_cdee49fe7cd79db13340150d356" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "medications"`);
    }

}
