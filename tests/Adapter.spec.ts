import "mocha";
import { expect } from "chai";
import { Adapter } from "../src/Adapter.js";
import { Complex } from "../src/Complex.js";
import { Rational } from "../src/Rational.js";

// Pruebas para Adapter
describe("Adapter", function() {
  // Test 1
  it("Debería convertir un Rational en un Complex correctamente", function() {
    const rational = new Rational(1, 2);
    const adapted = new Adapter(rational);
    expect(adapted.getReal()).to.equal(0.5);
    expect(adapted.getImaginary()).to.equal(0);
  });

  // Test 2
  it("Debería sumar un Rational a un Complex correctamente", function() {
    const rational = new Rational(1, 2);
    const complex = new Complex(2, 3);
    const adaptedRational = new Adapter(rational);
    const result = adaptedRational.add(complex);
    expect(result.getReal()).to.equal(2.5);
    expect(result.getImaginary()).to.equal(3);
  });

  // Test 3
  it("Debería restar un Rational a un Complex correctamente", function() {
    const rational = new Rational(3, 2);
    const adapted = new Adapter(rational);
    const complex = new Complex(1, 2);
    const result = adapted.subtract(complex);
    expect(result.getReal()).to.equal(0.5);
    expect(result.getImaginary()).to.equal(-2);
  });

  // Test 4
  it("Debería multiplicar un Rational a un Complex correctamente", function() {
    const rational = new Rational(1, 2);
    const adapted = new Adapter(rational);
    const complex = new Complex(1, 2);
    const result = adapted.multiply(complex);
    expect(result.getReal()).to.equal(0.5);
    expect(result.getImaginary()).to.equal(1);
  });

  // Test 5
  it("Debería dividir un Rational a un Complex correctamente", function() {
    const rational = new Rational(1, 2);
    const adapted = new Adapter(rational);
    const complex = new Complex(1, 2);
    const result = adapted.divide(complex);
    expect(result.getReal()).to.equal(0.1);
    expect(result.getImaginary()).to.equal(-0.2);
  });
});
