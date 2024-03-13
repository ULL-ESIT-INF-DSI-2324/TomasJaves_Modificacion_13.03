import { Observer } from './InterfaceObserver.js';
import { Event } from './InterfaceEvent.js';
import { Observable } from './InterfaceObservable.js';

export class ConcreteObservable<T> implements Observable<T> {
  // Lista de observadores
  private observers: Observer<T>[] = [];

  /**
   * Método para suscribir un observador
   * @param {Observer<T>} observer Observador a suscribir
   * @returns {void}
   */
  subscribe(observer: Observer<T>): void {
    // Comprobamos que el observador no esté ya suscrito
    if (!this.observers.includes(observer)) {
      // Suscribimos el observador
      this.observers.push(observer);
    } else {
      console.log('Observador ya suscrito. No se ha suscrito de nuevo.');
    }
  }

  /**
   * Método para desuscribir un observador
   * @param {Observer<T>} observer Observador a desuscribir
   * @returns {void}
   */
  unsubscribe(observer: Observer<T>): void {
    // Constante para guardar el índice del observador
    const index = this.observers.indexOf(observer);
    // Si el índice es mayor que -1, significa que el observador está suscrito
    if (index > -1) {
      // Usamos splice para eliminar el observador de la lista
      this.observers.splice(index, 1);
    } else {
      console.log('Observador no suscrito. No se ha desuscrito.');
    }
  }

  /**
   * Método para notificar a los observadores
   * @param {Event<T>} event Evento a notificar
   * @returns {void}
   */
  notify(event: Event<T>): void {
    // Recorremos la lista de observadores y notificamos el evento
    this.observers.forEach(observer => observer.update(event));
  }
}
