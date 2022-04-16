const productos = [
    {
        id: 1,
        name: "Estantes hexagonales",
        price: "$" + 1500,
        stock: 20,
        image: "media/estantesHexagonal.jpg",
        category: "bazar",
        descripcion1: "Lorem ipsum",
        descripcion2: "Lorem ipsum",
        descripcion3: "Lorem ipsum",

    },
    {
        id: 2,
        name: "Maceta de Metal",
        price: "$" + 800,
        stock: 10,
        image: "media/deco1.jpg",
        category: "bazar",
        descripcion1: "Lorem ipsum",
        descripcion2: "Lorem ipsum",
        descripcion3: "Lorem ipsum",

    },
    {
        id: 3,
        name: "Jarrones",
        price: "$" + 1200,
        stock: 15,
        image: "media/deco2.jpg",
        category: "bazar",
        descripcion1: "Lorem ipsum",
        descripcion2: "Lorem ipsum",
        descripcion3: "Lorem ipsum",

    },
    {
        id: 4,
        name: "Cuadros Varios",
        price: "$" + 700,
        stock: 20,
        image: "media/deco3.jpg",
        category: "hogar",
        descripcion1: "Lorem ipsum",
        descripcion2: "Lorem ipsum",
        descripcion3: "Lorem ipsum",

    },
    {
        id: 5,
        name: "Cuadro West",
        price: "$" + 600,
        stock: 5,
        image: "media/deco4.jpg",
        category: "hogar",
        descripcion1: "Lorem ipsum",
        descripcion2: "Lorem ipsum",
        descripcion3: "Lorem ipsum",

    }
]




export const traerProductos = (categoryId) => {
    return new Promise((resolve, reject) => {
        const productosFiltrados = productos.filter(
            (producto) => producto.category === categoryId)
        setTimeout(() => {
            if (categoryId) {
                resolve(productosFiltrados)
            } else {
                resolve(productos)
            }
        }, 1000);
    })
}

export const traerProducto = (id) => {
    return new Promise((resolve, reject) => {
        const productoElegido = productos.find((producto) => producto.id === Number(id))
        setTimeout(() => {
            resolve(productoElegido)
        }, 1000);
    })
}

