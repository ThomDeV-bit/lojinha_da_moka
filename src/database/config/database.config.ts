import { DataSource, DataSourceOptions } from 'typeorm';
import { RolesEntity } from '../entities/roles.entity';
import { UserEntity } from '../entities/user.entity';
import { UserPermissionEntity } from '../entities/user-permission.entiry';
import { ProductEntity } from '../entities/product.entity';
import { ProductImagesEntity } from '../entities/products-images.entity';
import { ProductsByOrderEntity } from '../entities/productsByOrder.entity';
import { ProductsCategorietEntity } from '../entities/products-categories.entity';
import { OrderstEntity } from '../entities/orders.entity';
import { Migrations1704805173520 } from '../1704805173520-migrations';

export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root123',
    database: 'loja',
    cache: true,
    entities: [UserEntity, RolesEntity, UserPermissionEntity,ProductEntity,ProductImagesEntity, ProductsByOrderEntity,ProductsCategorietEntity,OrderstEntity],
    migrations: [Migrations1704805173520],
    logging: 'all'
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource;
