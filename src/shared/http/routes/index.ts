import customerRouter from "@modules/customers/routes/customer.routes";
import productRouter from "@modules/products/routes/products.routes";
import passwordRouter from "@modules/users/routes/password.routes";
import profileRouter from "@modules/users/routes/profile.routes";
import sessionsRouter from "@modules/users/routes/sessions.routes";
import userRouter from "@modules/users/routes/users.routes";
import { Router } from "express";

const routes=Router();

routes.use('/products',productRouter);
routes.use('/users',userRouter);
routes.use('/sessions',sessionsRouter);
routes.use('/password',passwordRouter);
routes.use('/profile', profileRouter);
routes.use('/customers',customerRouter);

/*routes.get("/",(request,response)=>{
    return response.json({message:'Hello Dev!'});
})*/

export default routes;