import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class riskFraudCpf1652477987785 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
          new Table({
            name: "riskFraudCpfs",
            columns: [
              {
                name: "id",
                type: "uuid",
                isPrimary: true,
              },
              {
                name: "cpf",
                type: "numeric(11)",
              },
              {
                name: "created_at",
                type: "timestamp",
                default: "now()",
              },
            ],
          })
        );
      }

    public async down(queryRunner: QueryRunner): Promise<void> {
    }

}
