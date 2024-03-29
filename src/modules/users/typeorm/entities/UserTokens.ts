import { Column, CreateDateColumn, Entity, Generated, PrimaryGeneratedColumn } from "typeorm";

@Entity('user_tokens')
export default class UserTokens{
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    user_id:string;
    @Column()
    @Generated('uuid')
    token:string;
    @CreateDateColumn()
    created_at:Date;
    @CreateDateColumn()
    updated_at:Date;
}