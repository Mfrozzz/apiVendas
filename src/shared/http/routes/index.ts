import productRouter from "@modules/products/routes/products.routes";
import userRouter from "@modules/users/routes/users.routes";
import { Router } from "express";

const routes=Router();

routes.use('/products',productRouter);
routes.use('/users',userRouter);//pasta insomnia alem de products, json pra funcionar uma get e outra post

/*routes.get("/",(request,response)=>{
    return response.json({message:'Hello Dev!'});
})*/

export default routes;