import fs from "fs";
import uploadConfig from "@config/upload";
import User from "../typeorm/entities/User";
import { getCustomRepository } from "typeorm";
import UsersRepository from "../typeorm/repositories/UsersRepository";
import AppError from "@shared/errors/AppError";
import path from "path";

interface IRequest{
    user_id:string;
    avatarFileName: string;
}

export default class UpdateUserAvatarService{
    public async execute({user_id,avatarFileName}:IRequest):Promise<User>{
        const userRepository = getCustomRepository(UsersRepository);
        const user = await userRepository.findById(user_id);
        if(!user){
            throw new AppError('User Not Found :(');
        }
        if(user.avatar){
            const userAvatarFilePath = path.join(uploadConfig.directory, user.avatar);
            const userAvatarFileExists = await fs.promises.stat(userAvatarFilePath);
            if(userAvatarFileExists){
                await fs.promises.unlink(userAvatarFilePath);
            }
        }
        user.avatar = avatarFileName;
        await userRepository.save(user);
        return user;
    }
}