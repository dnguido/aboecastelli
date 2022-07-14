/* suma total de una supuesta compra con funciones de orden superior */

class stockCollection extends Array {
    suma(clave) {
        return this.reduce((a, b) => a + (b[clave] || 0), 0);
    }
}
const stock = new stockCollection(...[
    {  id: 'taza 3d', precio: 500},
    {  id: 'mate 3d', precio: 150},
    {  id: 'lampara 3d', precio: 130},
    {  id: 'tapiz macrame', precio: 200},
    {  id: 'espejo macrame', precio: 150},]);

console.log(stock.suma('precio'));


/* venta de productos */

class Productos{
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

productos.push(new Productos ("taza 3d", 500))
productos.push(new Productos ("mate 3d", 150))
productos.push(new Productos ("lampara 3d", 130))
productos.push(new Productos ("tapiz macrame", 200))
productos.push(new Productos ("espejo macrame", 150))

for (const item of productos){
    if (item.nombre == "mate 3d" && "tapiz macrame"){
        item.vender();
    }
}

console.log(productos);


/* precios acualizados stock con funciones de orden superior */

stockActualizado = [
    {  id: 'taza 3d', precio: 800},
    {  id: 'mate 3d', precio: 200},
    {  id: 'lampara 3d', precio: 130},
    {  id: 'tapiz macrame', precio: 300},
    {  id: 'espejo macrame', precio: 150},];
   const nuevo = stockActualizado.map(item => item.precio).reduce((prev, curr) => prev + curr, 0);
   console.log(nuevo);















/* class productosColecction{
    suma(clave){
        return this.reduce((a, b) => a (b [clave] || 0), 0) 
    }
}

const productos = new productosColecction(... [
    {id: "taza 3d", precio: 1500},
    {id: "mate 3d", precio: 1000},
    {id: "lampara 3d", precio: 2000},
    {id: "personaje 3d", precio: 800},
    {id: "espejo macrame", precio: 1800},
    {id: "tapiz macrame", precio: 1200},]);

console.log(productos.suma("precio"));        
  */
 



