const products = [];
const shoppingCart = [];
// Se creo un constructor de objetos de productos

class Producto {
  constructor(titulo, precio) {
    this.id = products.length + 1;
    this.titulo = titulo;
    this.precio = precio;
  }
}
products.push(new Producto("Mountain bike Battle 210 R29", 80000));
products.push(new Producto("Bicicleta Silverfox 2021 M", 75689));
products.push(new Producto("Mountain Bike Thunder Sky Rodado 29", 66799));
products.push(new Producto("Mountain bike TopMega Sunshine R29", 86899));
products.push(new Producto("Mountain bike Shifter", 64999));
products.push(new Producto("Mountain bike SLP 5 pro R29 18", 79376));
products.push(new Producto("Bicicleta paseo femenina Futura", 51838));
products.push(new Producto("Mountain bike Olmo Wish 290", 94499));
products.push(new Producto("Bicicleta plegable Fire Bird R20", 85000));

console.table(products);

for (i = 0; i < products.length; i++) {
  let titulos = document.getElementsByClassName("title-product");
  let precio = document.getElementsByClassName("product-price");
  titulos[i].innerText = products[i].titulo;
  precio[i].innerText = "$" + products[i].precio;
}

anio = document.getElementById("anio");
a = new Date();
anio.innerText = a.getFullYear();

localStorage.setItem("productos", JSON.stringify(products));

function addShoppingCart(id) {
  let prod = localStorage.getItem("productos", products);
  let arr = [];
  arr = JSON.parse(prod);
  shoppingCart.push(arr[id - 1]);
  localStorage.setItem("Carrito de Compras", JSON.stringify(shoppingCart));
}
