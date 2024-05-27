let precioInicial = 1990;
let tasaAumento = 10;
let anios = 10;

console.log("Año Precio");
for (let año = 1; año <= anios; año++) {
    precioInicial *= (1 + tasaAumento / 100);
    console.log(`${año} $${precioInicial}`);
}
