import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import ProductsRepository from "../typeorm/repositories/ProductRepository";

interface IRequest{
    id: string;
}

export default class ShowProductService{

    public async execute({id}: IRequest) : Promise<Product>{
        
        const productsRepository = getCustomRepository(ProductsRepository);
        const product = await productsRepository.findOne(id);

        if(!product){
            throw new AppError('Product not found.');
        }

        return product;
    }
}