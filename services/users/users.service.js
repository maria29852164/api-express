import faker from 'faker'
import boom from '@hapi/boom'
import { getConnection } from "../../libs/db/postgres";
import { sequelize } from "../../libs/db/sequelize";

export class UsersService{
  constructor() {
    this.users = []
    this.sequelize = sequelize



  }
  async find(){
    const [data,metadata] =await  this.sequelize.query('SELECT * FROM tasks');
    return {data,metadata}

  }


}
