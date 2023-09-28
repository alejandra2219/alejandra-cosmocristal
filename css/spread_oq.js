let otro_producto{
    nombre_producto : "consola ps5",
    precio : 210000, 
    dispinibilidad : true,
    color : "roja",
    disco : false
}
let producto={
    nombre_producto:"consola XBOX",
    controles:2,
    camara:true
}

let nuevo_producto = {...otro_producto, ...producto};
console.log{otro_producto};
console.log{nuevo_producto};

//sumatoria de objetos mediante spread operator
