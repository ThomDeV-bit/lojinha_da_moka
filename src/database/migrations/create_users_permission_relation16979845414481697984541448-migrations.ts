import { MigrationInterface, QueryRunner } from "typeorm";

export class Create_users_permission_relatio1697984541448 implements MigrationInterface {
    name = 'Migrations1697984541448'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE \`user_entity\` (\`id\` varchar(255) NOT NULL, \`name\` varchar(100) NOT NULL, \`email\` varchar(255) NOT NULL, \`phone\` varchar(16) NOT NULL, \`password\` varchar(255) NOT NULL, UNIQUE INDEX \`IDX_415c35b9b3b6fe45a3b065030f\` (\`email\`), UNIQUE INDEX \`IDX_8facb26d9198e66e95413a7983\` (\`phone\`), PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`user_permission\` (\`id\` varchar(255) NOT NULL, \`userId\` varchar(255) NULL, \`rolesId\` varchar(255) NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`CREATE TABLE \`roles\` (\`id\` varchar(255) NOT NULL, \`role\` enum ('user', 'admin') NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
        await queryRunner.query(`ALTER TABLE \`user_permission\` ADD CONSTRAINT \`FK_deb59c09715314aed1866e18a81\` FOREIGN KEY (\`userId\`) REFERENCES \`user_entity\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE \`user_permission\` ADD CONSTRAINT \`FK_5e7cff3a337cfc21df6c0b1f575\` FOREIGN KEY (\`rolesId\`) REFERENCES \`roles\`(\`id\`) ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`CREATE TABLE \`query-result-cache\` (\`id\` int NOT NULL AUTO_INCREMENT, \`identifier\` varchar(255) NULL, \`time\` bigint NOT NULL, \`duration\` int NOT NULL, \`query\` text NOT NULL, \`result\` text NOT NULL, PRIMARY KEY (\`id\`)) ENGINE=InnoDB`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE \`query-result-cache\``);
        await queryRunner.query(`ALTER TABLE \`user_permission\` DROP FOREIGN KEY \`FK_5e7cff3a337cfc21df6c0b1f575\``);
        await queryRunner.query(`ALTER TABLE \`user_permission\` DROP FOREIGN KEY \`FK_deb59c09715314aed1866e18a81\``);
        await queryRunner.query(`DROP TABLE \`roles\``);
        await queryRunner.query(`DROP TABLE \`user_permission\``);
        await queryRunner.query(`DROP INDEX \`IDX_8facb26d9198e66e95413a7983\` ON \`user_entity\``);
        await queryRunner.query(`DROP INDEX \`IDX_415c35b9b3b6fe45a3b065030f\` ON \`user_entity\``);
        await queryRunner.query(`DROP TABLE \`user_entity\``);
    }

}
