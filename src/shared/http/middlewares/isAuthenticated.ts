import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import authConfig from "@config/auth";
import AppError from "@shared/errors/AppError";

interface TokenPayload{
    iat: number;
    exp: number;
    sub: string;
}

 export default function isAuthenticated(request:Request,response:Response,next:NextFunction):void{
    const authHeader = request.headers.authorization;
    if(!authHeader){
        throw new AppError('JWT token is missing.');
    }
    const [type,token] = authHeader.split(' ');
    try{
        const decodeToken = verify(token,authConfig.jwt.secret);
        const { sub } = decodeToken as TokenPayload;
        request.user = { id : sub };
        return next();
    }catch{
        throw new AppError('Invalid JWT token.');
    }
 }