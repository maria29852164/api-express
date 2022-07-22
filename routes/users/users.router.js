import {Router} from 'express'
import { UsersService } from "../../services/users/users.service";
export const routerUser = new Router();

const service = new UsersService()
routerUser.get('/',async(req,res,next)=> {
   try{
     const users = await service.find();
     return res.json(users)

   }catch (e){
    next(e);
   }
})
