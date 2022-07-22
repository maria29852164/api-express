import faker from 'faker'
import boom from '@hapi/boom'
import { getConnection } from "../../libs/db/postgres";

export class UsersService{
  constructor() {
    this.users = []
    getConnection().then(connection=> this.client= connection)



  }
  async find(){
    const rta =await  this.client.query('SELECT * FROM task');
    return rta.rows;

  }


}
