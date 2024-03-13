import "mocha";
import { expect } from "chai";
import { Observer } from "../src/InterfaceObserver.js";

describe("Observer", function() {
  it("debería tener un método update", function() {
    const observer: Observer<string> = {
      update: (event) => {
        console.log(`Recibido un nuevo evento con id: ${event.id} y data: ${event.data}`);
      }
    };
    expect(observer.update).to.be.a("function");
  });
});