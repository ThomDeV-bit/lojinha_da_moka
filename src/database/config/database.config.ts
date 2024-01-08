import { DataSource, DataSourceOptions } from 'typeorm';
import { RolesEntity } from '../entities/roles.entity';
import { UserEntity } from '../entities/user.entity';
import { UserPermissionEntity } from '../entities/user-permission.entiry';
import { Migrations1698692081680 } from '../migrations/1698692081680-migrations';
import { ProductEntity } from '../entities/product.entity';
import { Migrations1704741263917 } from '../migrations/1704741263917-migrations';

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root123',
    database: 'loja',
    cache: true,
    entities: [UserEntity, RolesEntity, UserPermissionEntity,ProductEntity],
    migrations: [Migrations1698692081680, Migrations1704741263917],
    logging: 'all'
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
