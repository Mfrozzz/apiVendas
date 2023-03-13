import Order_Products from "@modules/orders/typeorm/entities/Order_Products";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')
export default class Product{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @OneToMany(()=>Order_Products,order_products=>order_products.products)
    order_products: Order_Products[];
    @Column()
    name:string;
    @Column('decimal')
    price:number;
    @Column('int')
    quantity:number;
    @CreateDateColumn()
    created_at:Date;
    @CreateDateColumn()
    updated_at:Date;
}