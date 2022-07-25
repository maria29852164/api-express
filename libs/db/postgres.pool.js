import { config } from "../../config/config";
import {Pool} from 'pg'
const USER = encodeURIComponent(config.db_user);
const PASSWORD = encodeURIComponent(config.db_password);
const URI = `postgres://${USER}:${PASSWORD}@${config.db_host}:${config.port}/${config.db_database}`
console.log(config);
export const pool = new Pool(config);



