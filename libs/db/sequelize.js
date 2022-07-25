import { config } from "../../config/config";
import { Sequelize } from "sequelize";
import dotenv from 'dotenv'
dotenv.config()
const USER = encodeURIComponent(config.user);
const PASSWORD = encodeURIComponent(config.password);
const URI = `postgres://${USER}:${PASSWORD}@${config.host}:${config.port}/${config.database}`
export const sequelize = new Sequelize(URI,{
  dialect: process.env.DB_DRIVER || 'postgres',
  logging:true

})
