import faker from 'faker'
import boom from '@hapi/boom'
import { getConnection } from "../../libs/db/postgres";
import { sequelize } from "../../libs/db/sequelize";

export class UsersService{
  constructor() {
    this.users = []
    this.sequelize = sequelize



  }
  async find() {
    const results = await this.sequelize.models.User.findAll()
    return results

  }


}
