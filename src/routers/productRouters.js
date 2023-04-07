import express, { Router } from "express";
import { postProductController, getProductController, getProductIdController } from '../controllers/ProductController.js';
/* import { FileManager } from "../dao/FileManager.js";
import { Producto } from "../entidades/Producto.js";
import { randomUUID } from 'crypto'; */
//import { productosDB } from "../dao/models/mongooseProductos.js";

export const productsRouter = Router();
/* const productosManager = new FileManager('dataBase/productos.json'); */


productsRouter.get('/', (req, res, next) => {  // hacer el get para mostrar lista y opcion de agregar producto
    res.render('cargaProductos', { pageTitle: "cargar productos" })
})
productsRouter.get('/list', getProductController)
productsRouter.post('/', postProductController)
productsRouter.get('/:id',getProductIdController)



/* productsRouter.get('/list', async (req, res, next) => {
    const productos = await productosDB.find().lean()
    res.render('listaProductos', {
        pageTitle: "listar Productos",
        hayProductos: productos.length > 0,
        productos,
    })

}) */
/* productsRouter.post('/', async (req, res, next) =>{// hacer el post para agregar producto
    //console.log(req.body)
    const datosP = req.body
    const result = await productosDB.create(datosP)
    console.log(result)
    res.json(result) 
}) */





/* productsRouter.get('/', async (req, res, next) => {
    try {
        const productos = await productosManager.buscarCosas()
        res.json(productos)
    } catch (error) {
        next(error)
    }
})
productsRouter.get('/:pid', async (req, res, next) => {
    try {
        const producto = await productosManager.buscarCosaSegunId(req.params.pid)
        res.json(producto)
    } catch (error) {
        next(error)
    }
})
productsRouter.post('/', async (req, res, next) => {
    try {
        const producto = new Producto({
            id: randomUUID(),
            ...req.body
        })
        console.log(producto)
        const agregado = await productosManager.guardarCosa(producto)
        res.json(agregado)
    } catch (error) {
        next(error)
    }
})
productsRouter.put('/:pid', async (req, res, next) => {
    let productoNuevo
    try {
        productoNuevo = await productosManager.buscarCosaSegunId(req.params.pid)
        productoNuevo = {...productoNuevo , ...req.body}
    } catch (error) {
        next(error)
    }

    try {
        const productoReemplazado = await productosManager.reemplazarCosa(req.params.pid, productoNuevo)
        res.json(productoReemplazado)
    } catch (error) {
        return next(error)
    }
})
productsRouter.delete('/:pid', async (req, res, next) => {
    try {
        const borrada = await productosManager.borrarCosaSegunId(req.params.pid)
        res.json(borrada)
    } catch (error) {
        next(error)
    }
}) */