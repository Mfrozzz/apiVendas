import productRouter from "@modules/products/routes/products.routes";
import sessionsRouter from "@modules/users/routes/sessions.routes";
import userRouter from "@modules/users/routes/users.routes";
import { Router } from "express";

const routes=Router();

routes.use('/products',productRouter);
routes.use('/users',userRouter);
routes.use('/sessions',sessionsRouter);

/*routes.get("/",(request,response)=>{
    return response.json({message:'Hello Dev!'});
})*/

export default routes;