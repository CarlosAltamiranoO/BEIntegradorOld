export class Producto{
    constructor({ id, title, description, code,  price, stock, category, thumbnail }) {
        /* if (!id) throw new Error('falta un argumento')
        if (!nombre) throw new Error('falta un argumento')
        if (!rol) throw new Error('falta un argumento') */

        this.id = id
        this.title = title
        this.description = description
        this.code = code
        this.price = price
        this.status = true
        this.stock = stock
        this.category = category
        this.thumbnail = thumbnail
    }
}