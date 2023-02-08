import { celebrate, Segments } from "celebrate";
import { Router } from "express";
import Joi from "joi";
import UserController from "../controllers/UsersController";
import isAuthenticated from "../../../shared/http/middlewares/isAuthenticated";
import multer from "multer";
import uploadConfig from "@config/upload";
import UserAvatarController from "../controllers/UserAvatarController";

const userRouter = Router();
const usersController = new UserController();
const upload = multer(uploadConfig);
const userAvatarController = new UserAvatarController();

userRouter.get('/', isAuthenticated,usersController.index);
userRouter.post('/',celebrate({
    [Segments.BODY]:{
        name:Joi.string().required(),
        email:Joi.string().email().required(),
        password:Joi.string().required()
    }
}),usersController.create);
userRouter.patch('/avatar',isAuthenticated,upload.single('avatar'),userAvatarController.update);

export default userRouter;//import on index.ts