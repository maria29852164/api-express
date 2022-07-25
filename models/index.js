import { User, UserSchema } from "./user.model";

const setupModels=()=>{
  User.init(UserSchema)
}
