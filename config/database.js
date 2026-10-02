import { Sequelize } from 'sequelize';
import "dotenv/config";
// Option 1: Passing a connection URI
const sequelize = new Sequelize(process.env.DATABASE, process.env.USER, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'postgres',
    logging: false,
  });

export default sequelize;