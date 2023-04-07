import  express, { urlencoded }  from "express";
import { productsRouter } from "../routers/productRouters.js";
import { cartsRouter } from "../routers/cartsRoutes.js";
import { PORT } from "../config/servidor.config.js";
import { engine } from "express-handlebars"
import { conectar } from "../dao/models/mongoose.js";

const app = express();
app.engine('handlebars',engine())
app.set('views', './views')
app.set('view engine', 'handlebars')


app.use(express.static('./public'))
app.use(express.json());
app.use('/api/products', productsRouter);
app.use('/api/carts', cartsRouter);
await conectar()

/* app.get('/api/products', (req, res, next ) =>{
    res.render('productos', { pageTitle: "Productos"})
})
app.get('/', (req, res) =>{
    res.redirect('/products')
}) 
app.post('/api/products', (req, res, next) =>{
    console.log(req.body)
    res.send("OK")
}) */



const server = app.listen(PORT, () => {console.log(`servidor Listening on port ${PORT}`)});

app.use((error, req, res, next) => {
    switch (error.message) {
        case 'id no encontrado':
            res.status(404)
            break
        case 'falta un argumento':
            res.status(400)
            break
        default:
            res.status(500)
    }
    res.json({ message: error.message })
})