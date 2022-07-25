require('dotenv').config()
export const config = {
  env : process.env.NODE_ENV || 'dev',
  port : process.env.PG_PORT ,
  user : process.env.DB_USER ,
  password : process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  database : process.env.DB_DATABASE
}
