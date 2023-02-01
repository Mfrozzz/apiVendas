import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import Joi from "joi";
import UserController from "../controllers/UsersController";
import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated";

const userRouter = Router();
const usersController = new UserController()

userRouter.get('/', isAuthenticated,usersController.index);
userRouter.post('/',celebrate({
    [Segments.BODY]:{
        name:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().required()
    }
}),usersController.create);

export default userRouter;//import on index.ts