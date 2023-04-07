const formCargarProductos = document.querySelector('#formCargarProductos')

if (formCargarProductos instanceof HTMLElement) {
    formCargarProductos.addEventListener('submit', event => {
        event.preventDefault()
        const formData = new FormData(formCargarProductos)
        const data = {}
        formData.forEach((value, key)=>(data[key] = value))
/*         for (const campo in formData) {
            data[campo] = formData[campo]
        } */
        fetch('/api/products', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        })
    })
}