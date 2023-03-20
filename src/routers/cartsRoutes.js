import express, { Router } from "express";
import { FileManager } from "../FileManager.js";
import { randomUUID } from 'crypto';
import { Carrito } from "../Carrito.js";


export const cartsRouter = Router();
cartsRouter.use(express.json())

const carritoManager = new FileManager('dataBase/carritos.json');
const productosManager = new FileManager('dataBase/productos.json');


cartsRouter.get('/:cid', async (req, res, next) => {
    try {
    const carrito = await carritoManager.buscarCosaSegunId(req.params.cid)
    res.json(carrito)
} catch (error) {
    next(error)
}
})

cartsRouter.post('/', async (req, res, next) => {
    try {
        const carrito = new Carrito( randomUUID(), [] )
        const agregado = await carritoManager.guardarCosa(carrito)
        res.json(agregado)
    } catch (error) {
        next(error)
    }
})

cartsRouter.post('/:cid/product/:pid', async (req, res, next) => {
    try {
        let flag = false;
        const carrito = await carritoManager.buscarCosaSegunId(req.params.cid)
        const producto = await productosManager.buscarCosaSegunId(req.params.pid)

        carrito.productos.map(c => {
            if (c.id === producto.id) {
                c.quantity = c.quantity + 1;
                flag = true;
            }
        })
        if (!flag)carrito.productos.push({ id: producto.id, quantity: 1 })
        const agregado = await carritoManager.reemplazarCosa(req.params.cid, carrito)
        res.json(agregado)
    } catch (error) {
        next(error)
    }
})

