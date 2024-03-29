import Customer from "@modules/customers/typeorm/entities/Customer";
import Product from "@modules/products/typeorm/entities/Product";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Order from "./Order";

@Entity('orders_products')
export default class Order_Products{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @ManyToOne(()=>Order,order=>order.order_products)
    @JoinColumn({name:'order_id'})
    order: Order;
    @ManyToOne(()=>Product,product=>product.order_products)
    @JoinColumn({name:'product_id'})
    products: Product;
    @Column()
    order_id:string;
    @Column()
    product_id:string;
    @Column('decimal')
    price: number;
    @Column('int')
    quantity:number;
    @Column()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}