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
console.log(productos);





















