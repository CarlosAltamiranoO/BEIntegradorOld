import mongoose from 'mongoose';

const schemaProductos = new  mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    code: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    stock: {type: Number, required: true},
}, {versionKey: false})

class ProductManager{
    constructor(){
        this.productosDB = mongoose.model('productos', schemaProductos)
    }
    async guardar(datosPr){
        const prGuardados = await this.productosDB.create(datosPr)
        return prGuardados
    }
    async obtenerTodos(){
        const prLista = await this.productosDB.find().lean()
        return prLista
    }
    async obtenerSegunId(id){
        try{
        const prXId = await this.productosDB.findById(id).lean()
        return prXId
        }
        catch(err){
            return null
        }
    }
}
export const productManager = new ProductManager()