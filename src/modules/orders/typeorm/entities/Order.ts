import Customer from "@modules/customers/typeorm/entities/Customer";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import Order_Products from "./Order_Products";

@Entity('orders')
export default class Order{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @ManyToOne(()=>Customer)
    @JoinColumn({name:'customer_id'})
    customer: Customer;
    @OneToMany(()=>Order_Products,order_products=>order_products.order,{cascade:true})
    order_products: Order_Products[];
    @Column()
    created_at: Date;
    @UpdateDateColumn()
    updated_at: Date;
}