import {MigrationInterface, QueryRunner} from "typeorm";

export class c0mestic1642913949868 implements MigrationInterface {
    name = 'c0mestic1642913949868'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "Organization" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "organization_name" character varying NOT NULL, CONSTRAINT "PK_67bcafc78935cd441a054c6d4ea" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "User" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "first_name" character varying NOT NULL, "last_name" character varying NOT NULL, "date_of_birth" TIMESTAMP NOT NULL, "email" character varying, "organization_id" integer, CONSTRAINT "REL_3a31755ce4938111a3010583b6" UNIQUE ("organization_id"), CONSTRAINT "PK_9862f679340fb2388436a5ab3e4" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Transaction" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "transaction_id" character varying NOT NULL, "total_items" integer NOT NULL, "sold_quantity" integer NOT NULL, "inventory_quantity" integer NOT NULL, "production_id" integer, CONSTRAINT "PK_21eda4daffd2c60f76b81a270e9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Production" ("id" SERIAL NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "production_model" character varying NOT NULL, "production_name" character varying NOT NULL, "price" integer NOT NULL, "total_items" integer NOT NULL, "sold_quantity" integer NOT NULL, "inventory_quantity" integer NOT NULL, CONSTRAINT "PK_186436fa663c137b77bc2a1dce0" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "transaction_users_user" ("transactionId" integer NOT NULL, "userId" integer NOT NULL, CONSTRAINT "PK_02fc00c2e44cda4a895a86f455d" PRIMARY KEY ("transactionId", "userId"))`);
        await queryRunner.query(`CREATE INDEX "IDX_108d241712c8a9597eeb3388ba" ON "transaction_users_user" ("transactionId") `);
        await queryRunner.query(`CREATE INDEX "IDX_8c04248fa07686a64b66aa8e77" ON "transaction_users_user" ("userId") `);
        await queryRunner.query(`ALTER TABLE "User" ADD CONSTRAINT "FK_3a31755ce4938111a3010583b6b" FOREIGN KEY ("organization_id") REFERENCES "Organization"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Transaction" ADD CONSTRAINT "FK_d2872de27d03cfb191c7968dde5" FOREIGN KEY ("production_id") REFERENCES "Production"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "transaction_users_user" ADD CONSTRAINT "FK_108d241712c8a9597eeb3388bac" FOREIGN KEY ("transactionId") REFERENCES "Transaction"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE "transaction_users_user" ADD CONSTRAINT "FK_8c04248fa07686a64b66aa8e77d" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "transaction_users_user" DROP CONSTRAINT "FK_8c04248fa07686a64b66aa8e77d"`);
        await queryRunner.query(`ALTER TABLE "transaction_users_user" DROP CONSTRAINT "FK_108d241712c8a9597eeb3388bac"`);
        await queryRunner.query(`ALTER TABLE "Transaction" DROP CONSTRAINT "FK_d2872de27d03cfb191c7968dde5"`);
        await queryRunner.query(`ALTER TABLE "User" DROP CONSTRAINT "FK_3a31755ce4938111a3010583b6b"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_8c04248fa07686a64b66aa8e77"`);
        await queryRunner.query(`DROP INDEX "public"."IDX_108d241712c8a9597eeb3388ba"`);
        await queryRunner.query(`DROP TABLE "transaction_users_user"`);
        await queryRunner.query(`DROP TABLE "Production"`);
        await queryRunner.query(`DROP TABLE "Transaction"`);
        await queryRunner.query(`DROP TABLE "User"`);
        await queryRunner.query(`DROP TABLE "Organization"`);
    }

}
