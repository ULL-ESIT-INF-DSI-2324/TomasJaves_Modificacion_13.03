import "mocha";
import { expect } from "chai";
import { Event } from "../src/InterfaceEvent.js";

describe("Evento", function() {
  it("debería tener un id y un dato", function() {
    const eventoPrueba: Event<string> = { id: "1", data: "Evento de prueba" };
    expect(eventoPrueba.id).to.equal("1");
    expect(eventoPrueba.data).to.equal("Evento de prueba");
  });
});