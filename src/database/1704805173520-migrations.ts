import { MigrationInterface, QueryRunner } from "typeorm";

export class Migrations1704805173520 implements MigrationInterface {
    name = 'Migrations1704805173520'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`productsCategotie\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`productId\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`productImages\` (\`id\` varchar(255) NOT NULL, \`image\` blob NULL, \`productId\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`products\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(255) NOT NULL, \`price\` int NOT NULL, \`quantity\` int NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`orders\` (\`id\` varchar(255) NOT NULL, \`valor_total\` int NOT NULL, \`status\` enum ('em_processamento', 'processado', 'cancelado') NOT NULL, \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), \`userId\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`price\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`quantity\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`price\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`quantity\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`quantidade\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`precoVenda\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`created_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`updated_at\` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6)`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`orderId\` varchar(36) NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`productsId\` varchar(255) NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`id\` varchar(255) NOT NULL PRIMARY KEY`);
        await queryRunner.query(`ALTER TABLE \`productsCategotie\` ADD CONSTRAINT \`FK_fbc32efabbc7443c8867bd7bb4b\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`productImages\` ADD CONSTRAINT \`FK_8dcf36b93879109c44a4ab49b77\` FOREIGN KEY (\`productId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_261f1322902ba3b21cf883ccddd\` FOREIGN KEY (\`orderId\`) REFERENCES \`orders\`(\`id\`) ON DELETE CASCADE ON UPDATE CASCADE`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD CONSTRAINT \`FK_4d542270767b10d95aa3ee12968\` FOREIGN KEY (\`productsId\`) REFERENCES \`products\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`orders\` ADD CONSTRAINT \`FK_151b79a83ba240b0cb31b2302d1\` FOREIGN KEY (\`userId\`) REFERENCES \`user_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE \`orders\` DROP FOREIGN KEY \`FK_151b79a83ba240b0cb31b2302d1\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_4d542270767b10d95aa3ee12968\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP FOREIGN KEY \`FK_261f1322902ba3b21cf883ccddd\``);
        await queryRunner.query(`ALTER TABLE \`productImages\` DROP FOREIGN KEY \`FK_8dcf36b93879109c44a4ab49b77\``);
        await queryRunner.query(`ALTER TABLE \`productsCategotie\` DROP FOREIGN KEY \`FK_fbc32efabbc7443c8867bd7bb4b\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`id\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`id\` varchar(255) NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD PRIMARY KEY (\`id\`)`);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`productsId\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`orderId\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`updated_at\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`created_at\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`precoVenda\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`quantidade\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`quantity\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`price\``);
        await queryRunner.query(`ALTER TABLE \`products\` DROP COLUMN \`name\``);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`quantity\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`price\` int NOT NULL`);
        await queryRunner.query(`ALTER TABLE \`products\` ADD \`name\` varchar(255) NOT NULL`);
        await queryRunner.query(`DROP TABLE \`orders\``);
        await queryRunner.query(`DROP TABLE \`products\``);
        await queryRunner.query(`DROP TABLE \`productImages\``);
        await queryRunner.query(`DROP TABLE \`productsCategotie\``);
    }

}
