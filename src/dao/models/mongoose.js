import mongoose from 'mongoose';
import { MONGODB_CN_STR} from "../../config/database.js";


export async function conectar(){
    await mongoose.connect(MONGODB_CN_STR)
    console.log(`base de datos conectada a ${MONGODB_CN_STR}`)
}

/* const schemaProductos = new  mongoose.Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    code: {type: String, required: true},
    price: {type: Number, required: true},
    category: {type: String, required: true},
    stock: {type: Number, required: true},
}, {versionKey: false})

export const productosDB = mongoose.model('productos', schemaProductos) */