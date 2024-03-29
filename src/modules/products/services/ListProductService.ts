import AppError from "@shared/errors/AppError";
import { getCustomRepository } from "typeorm";
import Product from "../typeorm/entities/Product";
import ProductRepository from "../typeorm/repositories/ProductRepository";

export default class ListProductService{
    public async execute():Promise<Product[]>{
        const productRepository = getCustomRepository(ProductRepository);
        const products = productRepository.find();
        return products;
    }
}