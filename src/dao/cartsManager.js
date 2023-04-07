import mongoose from 'mongoose';

const schemaCarts = new mongoose.Schema({
    productos: { type: Array, }
}, { versionKey: false })

class CartsManager {
    constructor() {
        this.cartsDB = mongoose.model('carts', schemaCarts)
    }
    async guardar(datosPr) {
        const prGuardados = await this.cartsDB.create(datosPr)
        return prGuardados
    }
    async obtenerTodos() {
        const prLista = await this.cartsDB.find().lean()
        console.log(prLista)
        return prLista
    }
    async obtenerSegunId(id) {
        try {
            const prXId = await this.cartsDB.findById(id).exec()
            console.log(prXId)
            return prXId
        }
        catch (err) {
            return null
        }

    }
    async actulizarXId(id, array){
        const actulizar = await this.cartsDB.findByIdAndUpdate(id, {$set:{productos:array}}, {new: true})
        console.log(actulizar)
        return actulizar

    }
}
export const cartsManager = new CartsManager()