import  Express  from "express";
import { productsRouter } from "./routers/productRouters.js";
import { cartsRouter } from "./routers/cartsRoutes.js";

const app = Express();
const PORT = 8080;
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);

const server = app.listen(PORT, () => {console.log(`Listening on port ${PORT}`)});