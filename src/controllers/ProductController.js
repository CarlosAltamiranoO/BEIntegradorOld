//import { productosDB } from "../dao/models/mongooseProductos.js";

import { productManager } from "../dao/productManager.js";



export async function postProductController(req, res, next) {
    const datosP = req.body;
    const result = await productManager.guardar(datosP);
    console.log(result);
    res.json(result);
}

export async function getProductController(req, res, next) {
    const productos = await productManager.obtenerTodos()
    res.render('listaProductos', {
        pageTitle: "listar Productos",
        hayProductos: productos.length > 0,
        productos,
    })
}
export async function getProductIdController(req, res, next) {
    const producto = await productManager.obtenerSegunId(req.params.id)
    console.log(producto)
    res.render('idProductos', {
        pageTitle: "Productos por id",
        producto,
    })
}



/* export async function getProductController(req, res, next) {
    const productos = await productosDB.find().lean()
    res.render('listaProductos', {
        pageTitle: "listar Productos",
        hayProductos: productos.length > 0,
        productos,
    })
} */

/* export async function postProductController(req, res, next) {
    //console.log(req.body)
    const datosP = req.body;
    const result = await productosDB.create(datosP);
    console.log(result);
    res.json(result);
} */
