import mongoose from 'mongoose';

const schemaCarts = new  mongoose.Schema({
    productos: {type: Array ,}
}, {versionKey: false})

class CartsManager{
    constructor(){
        this.cartsDB = mongoose.model('carts', schemaCarts)
    }
    async guardar(datosPr){
        const prGuardados = await this.cartsDB.create(datosPr)
        return prGuardados
    }
    async obtenerTodos(){
        const prLista = await this.cartsDB.find().lean()
        return prLista
    }
    async obtenerSegunId(id){
        const prXId = await this.cartsDB.findById(id).lean()
        return prXId
    }
}
export const cartsManager = new CartsManager()