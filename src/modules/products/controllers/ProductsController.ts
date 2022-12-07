import CreateProductService from "@modules/products/services/CreateProductService";
import DeleteProductService from "@modules/products/services/DeleteProductService";
import ListProductService from "@modules/products/services/ListProductService";
import ShowProductService from "@modules/products/services/ShowProductService";
import UpdateProductService from "@modules/products/services/UpdateProductService";
import { Request, Response } from "express";

export default class ProductsController{

    public async index(request:Request,response:Response):Promise<Response>{
        const listProducts = new ListProductService();
        const products = await listProducts.execute();
        return response.json(products);
    }

    public async show(request:Request,response:Response):Promise<Response>{
        const {id} = request.params;//requisição para a API por parametro ou .body, corpo da requisição...
        const showProduct = new ShowProductService();
        const product = await showProduct.execute({id});
        return response.json(product);
    }

    public async create(request:Request,response:Response):Promise<Response>{
        const {name,price,quantity} = request.body;//requisição para a API por parametro ou .body, corpo da requisição...
        const createProduct = new CreateProductService();
        const product = await createProduct.execute({name,price,quantity});
        return response.json(product);
    }

    public async update(request:Request,response:Response):Promise<Response>{
        const {id} = request.params;
        const {name,price,quantity} = request.body;//requisição para a API por parametro ou .body, corpo da requisição...
        const updateProduct = new UpdateProductService();
        const product = await updateProduct.execute({id,name,price,quantity});
        return response.json(product);
    }

    public async delete(request:Request,response:Response):Promise<Response>{
        const {id} = request.params;//requisição para a API por parametro ou .body, corpo da requisição...
        const deleteProduct = new DeleteProductService();
        const product = await deleteProduct.execute({id});
        return response.json([]);
    }
}