// Importa las clases Complex y Rational
import { Complex } from "./Complex";
import { Rational } from "./Rational";

/**
 * Clase que adapta un número racional a un número complejo siguiendo el patrón Singleton.
 * @class Adapter
 * @extends {Complex}
 */
export class Adapter extends Complex {
  constructor(rational: Rational) {
    // Llamamos al constructor de Complex, pasando el valor de Rational como la parte real y 0 como la parte imaginaria
    super(rational.getNumerator() / rational.getDenominator(), 0);
  }
}