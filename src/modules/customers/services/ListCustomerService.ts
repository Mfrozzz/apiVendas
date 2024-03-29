import { getCustomRepository } from "typeorm";
import Customer from "../typeorm/entities/Customer";
import CustomersRepository from "../typeorm/repositories/CustomersRepository";

export default class ListCustomerService{
    public async execute():Promise<Customer[]>{
        const customerRepository = getCustomRepository(CustomersRepository);
        const customer = await customerRepository.find();
        return customer;
    }
}