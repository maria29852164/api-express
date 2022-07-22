import {Client,Pool} from 'pg'
const options = {
  host:'localhost',
  port:5432,
  user:'maria',
  password:'maria2002',
  database:'db'
}
export const pool = new Pool(options);
