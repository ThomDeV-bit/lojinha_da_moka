import { DataSource, DataSourceOptions } from 'typeorm';
import { RolesEntity } from '../entities/roles.entity';
import { UserEntity } from '../entities/user.entity';
import { Create_users_permission_relatio1697984541448 } from '../migrations/create_users_permission_relation16979845414481697984541448-migrations';
import { UserPermissionEntity } from '../entities/user-permission.entiry';

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root123',
    database: 'loja',
    cache: true,
    entities: [ UserEntity, RolesEntity, UserPermissionEntity ],
    migrations: [Create_users_permission_relatio1697984541448 ],
    logging: 'all'
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
