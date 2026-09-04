// ECMASCRIPT Estandar que define como debe funcionar JS
// ECMASCRIPT -> Estándar que define cómo debe funciona JS
// Chrome, MS Edge, Brave, etc -> V8
// Firefox -> SpiderMonkey
// Safiri -> JavaScriptCore

// Versiones importantes ECMAScript
// Cada nueva versión agrega características al lenguaje
// ES5 (2009)
// ES6 (2015) -> Se hicieron actualizacione importantes.
// * Apareció let y const en lugar var, 
// * arrow functions, 
// * clases, 
// * template strings,
// * destructuring, 
// * promises, etc.

// Funciones por declaración
// Funciones sin parámetros

function nombreDeLaFUncion() {
  console.log('Hola a todos G31!')
}

nombreDeLaFUncion()

// Funciones con parámetros por defecto con retorno y en múltiples líneas

function calcularSiEsMayorDe18(edad = 1) {
  console.log(edad) // undefined si no pasamos el parámetro
  console.log(undefined > 18) // false
  if (edad > 18) {
    return 'Es mayor de edad'
  } else {
    return 'Es menor de edad'
  }
}

console.log(calcularSiEsMayorDe18())
console.log(calcularSiEsMayorDe18(25))

// ARROW FUNCTIONS (Funciones flecha) =>

// Funciones sin parámetros en una línea

// function imprimiendoSaludo1() {
//   console.log('Hola a todos nuevemente - sin arrow functions')
// }

// imprimiendoSaludo1()

const imprimiendoSaludo2 = () => console.log('Hola a todos nuevamente')

imprimiendoSaludo2()

// Funciones con parámetros en un línea
const suma = (numero1, numero2) => numero1 + numero2

// function suma(numero1, numero2) {
//   return numero1 + numero2
// }

console.log(suma(5, 2)) // 7

// Arrow functions con parámetros por defecto con retorno y en múltiples líneas

const saludoEnMayusculas = (nombre = 'Anónimo') => {
  const nombreEnMayusculas = nombre.toUpperCase()

  return '¡Hola ' + nombreEnMayusculas + '!'
}

console.log(saludoEnMayusculas())
console.log(saludoEnMayusculas('Uzziel'))