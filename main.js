//Ecommerce de tortas y catering. La idea es contar con varios servicios de cosas dulces para eventos y un stock.

let tortas = prompt("Elige tu torta favorita");
console.log(tortas);

let arrayTortas = [
   {
      name: "chocotorta",
      sizes: "grande",
      price: 5000,
      stock: 2,
      categoria: "tortas",
   },
   {
      name: "oreotorta",
      sizes: "grande",
      price: 5000,
      stock: 0,
      categoria: "tortas",
   },
   {
      name: "cheesecake",
      sizes: "chica",
      price: 2000,
      stock: 5,
      categoria: "tortas",
   },
   {
      name: "lemon pie",
      sizes: "grande",
      price: 5000,
      stock: 1,
      categoria: "tortas",
   },
];

function ComprarTorta(nombreTorta) {
   let torta = arrayTortas.find(item => item.name === nombreTorta);

   if (torta && torta.stock > 0) {
      let confirmacionCompra = confirm("¿Quieres comprar tu torta?");

      if (confirmacionCompra) {
         console.log("Compra confirmada. Redirigiendo a Mercado Pago...");
         alert("Anda a comprar la velita, tu torta esta en camino")
      } else {
         console.log("Compra cancelada.");
      }
   } else {
      alert("Perdón, en estos momentos no contamos con stock disponible");
   }
}
ComprarTorta(tortas);



 