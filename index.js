class Producto { 
    constructor (nombre, precio){ 
        this.nombre = nombre; 
        this.precio = precio; 
        this.vendido = false; 
    } 
    vender(){ 
        this.vendido = true; 
    } 
} 
 
const productos = { 
    impresion3D: [ 
        {nombre: "mate 3d", precio: 1000}, 
        {nombre: "taza 3d", precio: 1500} 
    ], 
    decoracion:[ 
        {nombre: "tapiz macrame", precio: 1200}, 
        {nombre: "espejo macrame", precio: 1800} 
    ] 
} 
 
 
 
for (const item of productos){ 
    if (item.nombre == "taza 3d"){ 
        item.vender(); 
    } 
} 
 
console.log(productos);





/* class Producto { 
    constructor (nombre, precio){ 
        this.nombre = nombre; 
        this.precio = precio; 
        this.vendido = false; 
    } 
    vender(){ 
        this.vendido = true; 
    } 
} 
 
let productos = []; 
 
productos.push(new Producto ("mate 3d", 1000)); 
productos.push(new Producto ("personaje 3d", 2000)); 
productos.push(new Producto ("lampara 3d", 2500)); 
productos.push(new Producto ("taza 3d", 1500)); 
productos.push(new Producto ("tapiz macrame", 1200)); 
productos.push(new Producto ("espejo macrame", 1800)); 
 
for (const item of productos){ 
    if (item.nombre == "lampara 3d"){ 
        item.vender(); 
    }else if(item.nombre == "taza 3d"){
        item.vender();
    }

 }
console.log(productos); */












