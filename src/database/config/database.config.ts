import { DataSource, DataSourceOptions } from "typeorm";


export const dataSourceOptions: DataSourceOptions = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: 'root123',
    database: 'loja',
    cache: true,
    synchronize: true,
    entities: [
        __dirname + '/../**/*.entity{.ts,.js}',
    ],
    migrations: [__dirname + '/../**/*.migrations{.ts,.js}',],
    logging: 'all',
};

const dataSource = new DataSource(dataSourceOptions);

export default dataSource

