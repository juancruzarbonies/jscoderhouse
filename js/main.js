alert("Bienvenido al simulador de compras");

// Lista de productos 
const productos = [
    "Mate",
    "Café",
    "Harina",
    "Palmitos",
    "Yerba",
    "Mermelada",
    "Cacao",
    "Picadillo",
    "Paté",
    "Caballa",
    "Arroz",
    "Arvejas",
    "Sardinas",
    "Atún",
    "Choclo",
    "Lentejas"
];

// Lista de precios
const precios = [
    569.89,
    3761.89,
    820.68,
    4331.88,
    683.88,
    1802.23,
    2450.89,
    626.88,
    626.88,
    3989.87,
    854.88,
    501.48,
    3533.88,
    2507.89,
    683.89,
    1082.89
];

let totalCompra = 0;

// Muestra de tdoso los productos + devolución de mensaje
const mostrarProductos = () => {
    let mensaje = "Productos disponibles: ";

    for (let i = 0; i < productos.length; i++) {
        mensaje += i + " - " + productos[i] + " ($" + precios[i] + ") | ";
    }

    return mensaje;
};

// Funcion para que el cliente pueda agregar mas productos
function agregarProducto() {
let opcion = parseInt(prompt(
    mostrarProductos() +
    " Ingrese el número del producto:"
));

    if (opcion >= 0 && opcion < productos.length) {
        totalCompra += precios[opcion];
        alert("Agregaste " + productos[opcion] + ". Total actual: $" + totalCompra);
        console.log("Producto agregado:", productos[opcion]);
    } else {
        alert("Opción inválida");
    }
}

// Función para finalizar compra
function finalizarCompra() {
    alert("Gracias por su compra. Total final: $" + totalCompra);
    console.log("Total final:", totalCompra);
}

// Bucle para agregar más productos 
let continuar = true;

while (continuar) {
    agregarProducto();

    let respuesta = prompt("Desea agregar otro producto?");

    if (respuesta !== null && respuesta.toLowerCase() === "si") {
        continuar = true;
    } else {
        continuar = false;
    }
}

finalizarCompra();