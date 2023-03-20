import express, { Router } from "express";
import { FileManager } from "../FileManager.js";
import { Producto } from "../Producto.js";
import { randomUUID } from 'crypto'

export const productsRouter = Router();

productsRouter.use(express.json())

const productosManager = new FileManager('dataBase/productos.json');

productsRouter.get('/', async (req, res, next) => {
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
})