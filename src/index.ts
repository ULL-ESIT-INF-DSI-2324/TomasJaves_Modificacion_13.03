import { Event } from './InterfaceEvent.js';
import { Observer } from './InterfaceObserver.js';
import { Observable } from './InterfaceObservable.js';
import { ConcreteObserver } from './ConcreteObserver.js';
import { ConcreteObservable } from './ConcreteObservable.js';

// Creando un observable
const observable: Observable<string> = new ConcreteObservable<string>();

// Creando dos observadores
const observer1: Observer<string> = new ConcreteObserver<string>();
const observer2: Observer<string> = new ConcreteObserver<string>();

// Suscribiendo los observadores al observable
observable.subscribe(observer1);
observable.subscribe(observer2);

// Creando un evento
const event: Event<string> = {
  id: "1",
  data: "MODIFICACIÓN DSI - EVENTOS GENÉRICOS."
};

// Notificando a los observadores sobre el evento
console.log("Notificando a los observadores sobre un evento:");
observable.notify(event);

// Desuscribiendo un observador
console.log("\nDesuscribiendo observer1 y notificando sobre un nuevo evento:");
observable.unsubscribe(observer1);

// Creando otro evento
const event2: Event<string> = {
  id: "2",
  data: "Dr. EDUARDO SEGREDO HA DECIDIDO APROBAR A TOMÁS JAVES ;)."
};

// Notificando a los observadores restantes sobre el nuevo evento
observable.notify(event2);
