import faker from 'faker'
import boom from '@hapi/boom'
import { getConnection } from "../../libs/db/postgres";
import { pool } from "../../libs/db/postgres.pool";

export class UsersService{
  constructor() {
    this.users = []
    this.pool = pool
    this.pool.on('error',(err)=> console.log(err))



  }
  async find(){
    const rta =await  this.pool.query('SELECT * FROM tasks');
    return rta.rows;

  }


}
