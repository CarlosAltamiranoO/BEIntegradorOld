export class Producto{
    constructor({ id, title, description, code,  price, stock, category, thumbnail }) {
        if (!id || !title || !description || !code || !price || !stock || !category ) 
        throw new Error('falta un argumento');
        this.id = id
        this.title = title
        this.description = description
        this.code = code
        this.price = price
        this.status = true
        this.stock = stock
        this.category = category
        if (thumbnail)this.thumbnail = thumbnail; else this.thumbnail=[];
    }

}