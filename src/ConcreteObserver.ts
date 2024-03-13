import { Observer } from './InterfaceObserver.js';
import { Event } from './InterfaceEvent.js';

/**
 * Clase concreta de un observador
 * @param <T> Tipo de dato del evento
 * @class
 * @implements {Observer<T>}
 */
export class ConcreteObserver<T> implements Observer<T> {
  /**
   * Método que se ejecuta cuando el observador recibe un evento
   * @param {Event<T>} event Evento que recibe el observador
   */
  update(event: Event<T>): void {
    console.log(`Recibido un nuevo evento con id: ${event.id} y data: ${event.data}`);
  }
}
