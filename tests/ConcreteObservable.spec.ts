import "mocha";
import { expect } from "chai";
import { ConcreteObservable } from "../src/ConcreteObservable.js";
import { Observer } from "../src/InterfaceObserver.js";
import { Event } from "../src/InterfaceEvent.js";

describe("ConcreteObservable", function() {
  it("debería tener los métodos subscribe, unsubscribe y notify", function() {
    const observable: ConcreteObservable<string> = new ConcreteObservable();
    expect(observable.subscribe).to.be.a("function");
    expect(observable.unsubscribe).to.be.a("function");
    expect(observable.notify).to.be.a("function");
  });

  it("debe suscribir y notificar a los observadores correctamente", function() {
    // Guardar la implementación original de console.log
    const originalConsoleLog = console.log;
    let loggedMessage = "";

    // Redefinir console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    // Crear un observable y un observador (sin métodos espía)
    const observable = new ConcreteObservable<string>();
    const observer: Observer<string> = {
      update(event: Event<string>): void {
        console.log(`Recibido un nuevo evento con id: ${event.id} y data: ${event.data}`);
      }
    };
    const event: Event<string> = { id: "testEvent", data: "testData" };

    // Suscribir el observador y notificar el evento
    observable.subscribe(observer);
    observable.notify(event);

    // Restaurar console.log a su implementación original
    console.log = originalConsoleLog;

    // Verificar que la salida capturada contenga el mensaje esperado
    const expectedMessage = `Recibido un nuevo evento con id: testEvent y data: testData\n`;
    expect(loggedMessage).to.equal(expectedMessage);
  });

  it("debe desuscribir a los observadores correctamente", function() {
    // Guardar la implementación original de console.log
    const originalConsoleLog = console.log;
    let loggedMessage = "";

    // Redefinir console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    // Crear un observable y un observador (sin métodos espía)
    const observable = new ConcreteObservable<string>();
    const observer: Observer<string> = {
      update(event: Event<string>): void {
        console.log(`Recibido un nuevo evento con id: ${event.id} y data: ${event.data}`);
      }
    };
    const event: Event<string> = { id: "testEvent", data: "testData" };

    // Suscribir el observador, desuscribirlo y notificar el evento
    observable.subscribe(observer);
    observable.unsubscribe(observer);
    observable.notify(event);

    // Restaurar console.log a su implementación original
    console.log = originalConsoleLog;

    // Verificar que la salida capturada no contenga el mensaje esperado
    expect(loggedMessage).to.equal("");
  });

  it("debería imprimir un mensaje si se intenta suscribir dos veces al mismo observador", function() {
    // Guardar la implementación original de console.log
    const originalConsoleLog = console.log;
    let loggedMessage = "";

    // Redefinir console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    // Crear un observable y un observador (sin métodos espía)
    const observable = new ConcreteObservable<string>();
    const observer: Observer<string> = {
      update(event: Event<string>): void {
        console.log(`Recibido un nuevo evento con id: ${event.id} y data: ${event.data}`);
      }
    };

    // Suscribir el observador dos veces
    observable.subscribe(observer);
    observable.subscribe(observer);

    // Restaurar console.log a su implementación original
    console.log = originalConsoleLog;

    // Verificar que la salida capturada contenga el mensaje esperado
    const expectedMessage = "Observador ya suscrito. No se ha suscrito de nuevo.\n";
    expect(loggedMessage).to.equal(expectedMessage);
  });

  it("debería imprimir un mensaje si se intenta desuscribir un observador no suscrito", function() {
    // Guardar la implementación original de console.log
    const originalConsoleLog = console.log;
    let loggedMessage = "";

    // Redefinir console.log para capturar su salida
    console.log = (message) => {
      loggedMessage += message + "\n";
    };

    // Crear un observable y un observador (sin métodos espía)
    const observable = new ConcreteObservable<string>();
    const observer: Observer<string> = {
      update(event: Event<string>): void {
        console.log(`Recibido un nuevo evento con id: ${event.id} y data: ${event.data}`);
      }
    };

    // Desuscribir el observador sin haberlo suscrito
    observable.unsubscribe(observer);

    // Restaurar console.log a su implementación original
    console.log = originalConsoleLog;

    // Verificar que la salida capturada contenga el mensaje esperado
    const expectedMessage = "Observador no suscrito. No se ha desuscrito.\n";
    expect(loggedMessage).to.equal(expectedMessage);
  });
});