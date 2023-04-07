const formCargarCarts = document.querySelector('#formCargarCarts')

if (formCargarCarts instanceof HTMLElement) {
    formCargarCarts.addEventListener('submit', event => {
        event.preventDefault()
        const formData = new FormData(formCargarCarts)
        const data = {}
        formData.forEach((value, key)=>(data[key] = value))
        fetch('/api/carts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                "content-type": "application/json"
            }
        })
    })
}