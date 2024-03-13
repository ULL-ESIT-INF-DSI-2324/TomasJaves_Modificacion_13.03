import { Rational } from './Rational';
import { Complex } from './Complex';
import { Adapter } from './Adapter';

// Uso del adaptador
const rationalNumber = new Rational(1, 2); // Representa el número racional 1/2
const complexNumber = new Complex(2, 3); // Representa el número complejo 2 + 3i

// Convierte el número racional en un complejo mediante el adaptador
const adaptedRational = new Adapter(rationalNumber);

// Ahora se pueden realizar operaciones entre el número complejo y el racional (porque es un complejo ahora)
// Suma
const sumResult = adaptedRational.add(complexNumber);
// Resta
const subtractResult = adaptedRational.subtract(complexNumber);
// Multiplicación
const multiplyResult = adaptedRational.multiply(complexNumber);
// División
const divideResult = adaptedRational.divide(complexNumber);

// Mostrar resultados (solo como ejemplo, ajusta según sea necesario)
console.log(`Suma: ${sumResult.getReal()} + ${sumResult.getImaginary()}i`);
console.log(`Resta: ${subtractResult.getReal()} + ${subtractResult.getImaginary()}i`);
console.log(`Multiplicación: ${multiplyResult.getReal()} + ${multiplyResult.getImaginary()}i`);
console.log(`División: ${divideResult.getReal()} + ${divideResult.getImaginary()}i`);