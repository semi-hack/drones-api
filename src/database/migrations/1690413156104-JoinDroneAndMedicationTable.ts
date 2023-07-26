import {MigrationInterface, QueryRunner} from "typeorm";

export class JoinDroneAndMedicationTable1690413156104 implements MigrationInterface {
    name = 'JoinDroneAndMedicationTable1690413156104'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "drones_medications_medications" ("dronesId" uuid NOT NULL, "medicationsId" uuid NOT NULL, CONSTRAINT "PK_f5aa76e73f0bc79f3a571f09653" PRIMARY KEY ("dronesId", "medicationsId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_4729047cb796f55be8858560c4" ON "drones_medications_medications" ("dronesId") `);
        await queryRunner.query(`CREATE INDEX "IDX_67e039256ca18e45d0b33cc944" ON "drones_medications_medications" ("medicationsId") `);
        await queryRunner.query(`ALTER TABLE "drones_medications_medications" ADD CONSTRAINT "FK_4729047cb796f55be8858560c48" FOREIGN KEY ("dronesId") REFERENCES "drones"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "drones_medications_medications" ADD CONSTRAINT "FK_67e039256ca18e45d0b33cc944d" FOREIGN KEY ("medicationsId") REFERENCES "medications"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "drones_medications_medications" DROP CONSTRAINT "FK_67e039256ca18e45d0b33cc944d"`);
        await queryRunner.query(`ALTER TABLE "drones_medications_medications" DROP CONSTRAINT "FK_4729047cb796f55be8858560c48"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_67e039256ca18e45d0b33cc944"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_4729047cb796f55be8858560c4"`);
        await queryRunner.query(`DROP TABLE "drones_medications_medications"`);
    }

}
