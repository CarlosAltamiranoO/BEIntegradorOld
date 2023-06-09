import express, { Router } from "express";
import { cartsManager } from '../dao/cartsManager.js'
import { productManager } from "../dao/productManager.js";
/* import { FileManager } from "../dao/FileManager.js";
import { randomUUID } from 'crypto';
import { Carrito } from "../entidades/Carrito.js"; */


export const cartsRouter = Router()

/* const carritoManager = new FileManager('dataBase/carritos.json');
const productosManager = new FileManager('dataBase/productos.json'); */
cartsRouter.get('/', (req, res, next) => {  // hacer el get para mostrar lista y opcion de agregar producto
    res.render('cargarCarrito', { pageTitle: "cargar carrito" })
})

cartsRouter.post('/', async (req, res, next) => {
    const datosC = req.body;
    console.log(datosC)
    const result = await cartsManager.guardar({ productos: [datosC] });
    console.log(result);
    res.json(result);
})

cartsRouter.get('/:cid', async (req, res, next) => {
    const carrito = await cartsManager.obtenerSegunId(req.params.cid)
    res.render('idCarrito', {
        pageTitle: "Pcarrito por id",
        carrito,
    })
})

cartsRouter.get('/:cid/product/:pid', async (req, res, next) => {
    let flag = false;
    const carrito = await cartsManager.obtenerSegunId(req.params.cid)
    if (carrito) {
        carrito.productos.map(c => {
            if (c.producto === req.params.pid) {
                const cant = parseInt(c.carntidad)
                c.carntidad = cant + 1;
                flag = true;
            }
        })
        if (!flag) {
            carrito.productos.push({ producto: req.params.pid, carntidad: 1 })
        }
        const respuesta = cartsManager.actulizarXId(req.params.cid, carrito.productos)
        res.send(`<P>${ await respuesta}</P>`)
    }
    else  res.send('<h3>no se encontro el carrito</h3>')
})

















/* cartsRouter.get('/:cid', async (req, res, next) => {
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
}) */

