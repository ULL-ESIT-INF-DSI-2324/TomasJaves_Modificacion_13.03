import "mocha";
import { expect } from "chai";
import { Observable } from "../src/InterfaceObservable.js";

describe("Observable", function() {
  it("debería tener los métodos subscribe, unsubscribe y notify", function() {
    const observable: Observable<string> = {
      subscribe: () => {},
      unsubscribe: () => {},
      notify: () => {}
    };
    expect(observable.subscribe).to.be.a("function");
    expect(observable.unsubscribe).to.be.a("function");
    expect(observable.notify).to.be.a("function");
  });
});