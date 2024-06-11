// Ejercicio 1
// num[] :: [num] -> num
// devuelve arreglo con los pares e impares
// ejemplo: L = [15,46,92,78,32,65,17], retornara los arreglos pares = [46,92,78,32] e impares =[15,65,17].

function clasificaParesImpares(L: number[]): number[][] {
  let pares: number[] = [];
  let impares: number[] = [];
  for (let i: number = 0; i < L.length; i++) {
    if (L[i] % 2 == 0) {
      pares.push(L[i]);
    } else {
      impares.push(L[i]);
    }
  }
  return [pares, impares];
}

console.log(clasificaParesImpares([15, 46, 92, 78, 32, 65, 17]));

// Ejercicio 2
// calificación superior a 35 puntos pasan
// NOMBRES[] :: [str] -> str
// PUNTAJES[] :: [num] -> num

// Mostrar al Mejor Jugador: nombre con xx puntajes
// mostrar al Peor Jugador: nombre con xx puntaje

// En dos array se DEBE de trabajar con el indice del array

// Función para clasificar a los puntajes
function clasificarPuntajes(puntajes: number[]):number[] {
    let puntajesClasificados: number[] = [];
    // se itera sobre el array de puntajes
    for (let i = 0; i < puntajes.length; i++) {
        // condicion para clasificar a los puntajes
        if (puntajes[i] > 35) {
            // si el puntaje es mayor a 35 se agrega al array
            puntajesClasificados.push(puntajes[i]);
        }
    }
    // retorna los puntajes clasificados
    return puntajesClasificados;
}

// Función para clasificar a los participantes
function clasificarParticipantes(nombres: string[]): string[] {
    // se crea un array vacío para almacenar los participantes clasificados
    let participantesClasificados: string[] = [];
    // se itera sobre el array de nombres
    for (let i = 0; i < nombres.length; i++) {
        // si el puntaje es mayor o igual a 35 se agrega al array
        participantesClasificados.push(nombres[i]);
      }
    // retorna los participantes clasificados
    return participantesClasificados;
  }

// Función para encontrar al mejor jugador
function encontrarMejorJugador(nombres: string[], puntajes: number[]): string {
    let mejorPuntaje = Math.max(...puntajes);
    let mejorJugador = nombres[puntajes.indexOf(mejorPuntaje)];
    // retorna el nombre del mejor jugador
    return mejorJugador;
}

// Función para encontrar al peor jugador
function encontrarPeorJugador(nombres: string[], puntajes: number[]): string{
    let peorPuntaje = Math.min(...puntajes);
    let peorJugador = nombres[puntajes.indexOf(peorPuntaje)];
    // retorna el nombre del peor jugador
    return peorJugador;
}

// Nombres y puntajes de los participantes
let NOMBRES: string[] = ["Beatriz", "Armando", "Marcela", "Nicolás", "Catalina"];
let PUNTAJES: number[] = [43, 68, 40, 39, 41];

// Obtener los resultados
let puntajes = clasificarPuntajes(PUNTAJES);
let participantes = clasificarParticipantes(NOMBRES);
let mejorJugador = encontrarMejorJugador(NOMBRES, PUNTAJES);
let peorJugador = encontrarPeorJugador(NOMBRES, PUNTAJES);

// Imprimir los resultados con el formato requerido
console.log("CLASIFICADOS");
for (let i = 0; i < participantes.length; i++) {
    console.log(`${participantes[i]} \t ${puntajes[i]} puntos`);
}

// Imprimir el mejor jugador
console.log(`Mejor Jugador: ${mejorJugador} con ${Math.max(...puntajes)} puntos.`);
// Imprimir el peor jugador
console.log(`Peor Jugador: ${peorJugador} con ${Math.min(...puntajes)} puntos.`);




// Ejercicio 3