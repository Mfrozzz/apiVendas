import AppError from "src/errors/AppError";
import { getCustomRepository } from "typeorm";
import User from "../typeorm/entities/User";
import UsersRepository from "../typeorm/repositories/UsersRepository";

interface IRequest{
    name:string;
    email:string;
    password:string;
}

export default class CreateUserService{
    public async execute({name,email,password}:IRequest):Promise<User>{
        const userRepository = getCustomRepository(UsersRepository);
        const emailExists =await userRepository.findByEmail(email);
        if(emailExists){
            throw new AppError('Email address already used');
        }
        const user = userRepository.create({name,email,password});
        await userRepository.save(user);
        return user;
    }
}