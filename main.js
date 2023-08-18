/*
 * Autor: 	Fernando Nadalich
 * Contenido:	Tienda virtual de artículos de pesca
 * Fecha:	16/08/2023
 */

//Definición de objetos por clases 

class Articulo {
    constructor(item, precio) {
        this.item = item;
        this.precio = precio;
    }
}

class ArticuloVendido {
    constructor(item, precio, cantidad) {
        this.item = item;
        this.precio = precio;
        //cantidad de veces que se agrega al carrito
        this.cantidad = cantidad;
    }
}

class Carro {
    constructor(products = []) {
        this.products = products;
    }
    addProduct2Carro(product) {
        let foundIndex = this.products.findIndex(e => e.item == product.item);

        if (foundIndex >= 0) {
            this.products[foundIndex].cantidad++;
        } else {
            product.cantidad = 1;
            this.products.push(product);
        }
    }
}

//Función de admisión al sitio.

const mayor = (edad, admitir) => {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

//Función para buscar el item en el arreglo y sumarle 1 a la cantidad vendida de ese artículo.

function sumar(prod, carrito) {
    for (const item of carrito) {
        if (item.item === prod) {
            item.cantidad++;
            break;
        }
    }
}

//Función de compra y armado de carrito

let carrito = new Carro();

const comprar = () => {
    let cantidad = 0;
    let monto = 0;
    alert("Usted puede compar: reel, caña y carpa.");
    let articulo = prompt("¿Que desea comprar? Ingrese `pagar`si desea terminar.").toLowerCase();
    while (articulo != "pagar") {
        switch (articulo) {
            case "reel":
                carrito.addProduct2Carro(new ArticuloVendido("reel", 32500, 0))
                cantidad++;
                monto += 32500;
                break
            case "caña":
                carrito.addProduct2Carro(new ArticuloVendido("caña", 21500, 0))
                cantidad++;
                monto += 21500
                break
            case "carpa":
                carrito.addProduct2Carro(new ArticuloVendido("carpa", 38300, 0))
                cantidad++;
                monto += 38300
                break;
            default:
                alert("No ingresó un artículo válido.");
                break;
        }
        articulo = prompt("Ingrese otro artículo si desea continuar comprando. Si concluyó, ingrese 'pagar'.").toLowerCase();
    }
    if (monto != 0) {
        let carritoInfo = "";
        for (const item of carrito.products) {
            carritoInfo += `Item: ${item.item}, Precio: $ ${item.precio}, Cantidad: ${item.cantidad}\n`;
        }
        alert(carritoInfo);
        alert(`Usted compró ${cantidad} artículos/s. El total de su factura es $ ${monto}. Gracias por su compra.`);
    } else {
        alert("Gracias por visitar nuestra tienda.")
    }
}

const productos = [];
productos.push(new Articulo("reel", 32500));
productos.push(new Articulo("caña", 21500));
productos.push(new Articulo("carpa", 38300));
console.log(productos);

// Validación de edad requerida para ingresar al carrito

let admitir = false;
let edad = parseInt(prompt("Ingrese su edad. Debe ser mayor a 18 años."));
const respuesta = mayor(edad, admitir);
console.log(respuesta)
if (respuesta == true) {
    alert("Bienvenido a la tienda de pesca.");
    comprar(carrito);
} else {
    alert("Usted debe ser mayor de 18 años para acceder a esta tienda.");
}