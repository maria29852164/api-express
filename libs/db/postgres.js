import {Client} from 'pg'
const options = {
  host:'localhost',
  port:5432,
  user:'maria',
  password:'maria2002',
  database:'db'
}
const client = new Client(options);
export const getConnection = async ()=> {
    await client.connect();
    return client
}
