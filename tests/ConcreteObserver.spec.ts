import "mocha";
import { expect } from "chai";
import { ConcreteObserver } from "../src/ConcreteObserver.js";

describe("ConcreteObserver", function() {
  it("debería tener un método update", function() {
    const observer: ConcreteObserver<string> = new ConcreteObserver();
    expect(observer.update).to.be.a("function");
  });

  it("debería imprimir el evento recibido", function() {
    const observer: ConcreteObserver<string> = new ConcreteObserver();

    const originalConsoleLog = console.log;
    let loggedMessage = "";
  
    // Redefinimos console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };
  
    // Ejecutamos el método que lista los Ensers
    observer.update({ id: "1", data: "Evento de prueba" });
  
    // Restauramos console.log a su implementación original
    console.log = originalConsoleLog;
  
    // Verificamos que la salida capturada contenga la descripción esperada
    const expectedDescription = `Recibido un nuevo evento con id: 1 y data: Evento de prueba\n`;
    expect(loggedMessage).to.equal(expectedDescription);
  });
});