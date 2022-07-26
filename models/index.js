import { User, UserSchema } from "./user.model";

export const setupModels= (sequelize) =>{
  User.init(UserSchema,User.config(sequelize))
}
