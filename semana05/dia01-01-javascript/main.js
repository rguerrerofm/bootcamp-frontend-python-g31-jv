
const a = 10
const b = 3
console.log(a/b)

const Base = 10
const Altura =5
console.log (Base*Altura/2)

// La siguiente línea imprime en la consola del navegador el texrto ¡Hola Javascript!

console.log('¡Hola Javascript!')

// 1. COMENTARIOS, Javascript ignora estas líneas y sirve para explicar el código

// Esto es un comentario de una línea

/*
  Esto es un comentario
  de
  varias
  líneas
*/

// 2. TIPOS DE DATOS

// Primitivos básicos:

// 2.1. Number (números)

// Ejemplos: 123, 34.89, -67, 0

console.log(20)
console.log(typeof 20) // number
console.log(123)
console.log(typeof 123) // number
console.log(34.89)
console.log(typeof 34.89) // number
console.log(-67)
console.log(typeof -67) // number
console.log(Number.MAX_SAFE_INTEGER)
console.log(Number.MIN_SAFE_INTEGER)

// 2.2. String (Texto)

console.log("Victor")
console.log(typeof "Victor") // string
console.log('Villazón')
console.log(typeof 'Villazón') // string

// 2.3. Boolean (verdadero o falso)

console.log(true)
console.log(false)

// 2.4. undefined, no tiene valor aún

let x // Estoy declarando una variable
console.log(x)

// 2.5. null, intencionalmente está vacío

let nombre = null
console.log(nombre)

// Ejercicio, verificar que tipo de datos devuelven las siguiente líneas

console.log(typeof 10) // number
console.log(typeof "hola") // string
console.log(typeof true) // boolean
console.log(typeof undefined) // undefined
console.log(typeof null) // object 🙄 ❓ <- Este un error(bug) de JS

// 3. Variables ( Guardar datos )

// const (valores que no cambian durante la ejecución del programa)

const pi = 3.141599

console.log(pi)

// pi = 4.98888 // ❌ <- Uncaught TypeError: Assignment to constant variable.

// let ( pueden vambiar los valores durante la ejecución del programa)

let edad = 20

console.log(edad)

edad = 25

console.log(edad)

// 4. Operadores matemáticos

console.log(1 + 3)
console.log(6 - 5)
console.log(2 * 8)
console.log(2 / 8)
console.log(10 / 2)
console.log(7 % 2) // Residuo
console.log(3 ** 2) // Exponente
console.log(Math.pow(3, 2)) // Exponente

// Ejercicio: Dadas dos variables, a con valor 10 y b con valor 3. Realiza una operación que permita obtener el residuo de la división entre a y b. Luego muestra el resultado en consola.

const a = 10
const b = 3

const residuo = a % b

console.log(residuo) // 1

// 5. Comparaciones

// Igualad débil ==

console.log(1 == "1") // true (solo campara sus valores)

// Igualdad estricta === (RECOMENDACIÓN: Usar siempre)

console.log(1 === "1") // false (compara el valor y el tipo de dato)

// 6. Operadores lógicos (AND, OR, NEGACIÓN)

console.log(true && false) // false
console.log(true || false) // true
console.log(!true) // false

// EJERCICIOS

// 1. Definir las variables para hallar el área de un triángulo. Base = 10, Altura = 5. Imprimir el resultado en la consola.

// 7. Concatenación (unir textos)

let nombre2 = "Victor"
let edad2 = 39

console.log("Hola" + nombre2) // HolaVictor
console.log("Hola " + nombre2) // Hola Victor
console.log("Hola " + nombre2 + ", tienes " + edad2 + " años.") // Hola Victor, tienes 39 años.
// Mejor forma de concatenar (template strings) - backtick (alt gr + })
console.log(`Hola ${nombre2}, tienes ${edad2} años.`) // Hola Victor, tienes 39 años.

// 8. Condicionales
