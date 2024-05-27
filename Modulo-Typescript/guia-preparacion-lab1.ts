//////////// EJERCICIO 1 ////////////

// Definimos el valor inicial del producto
let valorProducto = 1990;
// Definimos el incremento
let tasadeAumento = 10;
// Definimos la cantidad de anios
let cantidadAnios = 10;
// Imprimimos la cabecera
console.log("Año Precio");
// Ciclo para mostrar los resultados
for (let año = 1; año <= cantidadAnios; año++) {
  // Multiplicamos el valor por el incremento
  valorProducto *= 1 + tasadeAumento / 100;
  // Imprimimos el resultado
  console.log(`${año} $${valorProducto}`);
}


//////////// EJERCICIO 2 ////////////

// Número entero a invertir
let numero = 12345;
// Inicializamos el número invertido
let numeroInvertido = 0;
// Iteramos mientras N sea mayor que 0
while (numero > 0) {
  // Obtenemos el último dígito de N
  let digito = numero % 10;
  // Agregamos el dígito al número invertido (multiplicado por 10 para desplazar las cifras)
  numeroInvertido = numeroInvertido * 10 + digito;
  // Quitamos el último dígito de N dividiendo entre 10 y truncando hacia abajo
  numero = (numero / 10) | 0;
}
// Imprimimos el número invertido
console.log(`El número invertido es: ${numeroInvertido}`);

//////////// EJERCICIO 3 ////////////

// Mensaje del loro
let mensajeLoro: string = "Hola mundo";
// Cantidad de repeticiones
let repiteMensaje: number = 5;
// Ciclo
for (let i = 0; i < repiteMensaje; i++) {
  // Imprimir el mensaje
  console.log(`${mensajeLoro}`);
}