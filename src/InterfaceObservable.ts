import { Observer } from './InterfaceObserver.js';
import { Event } from './InterfaceEvent.js';

/**
 * Interfaz para los observables
 * @interface Observable
 * @template T Tipo de dato del evento
 * @method subscribe Método para suscribir un observador
 * @method unsubscribe Método para desuscribir un observador
 * @method notify Método para notificar a los observadores
 * @param {Observer<T>[]} observers Lista de observadores
 * @param {Observer<T>} observer Observador a suscribir
 */
export interface Observable<T> {
  subscribe(observer: Observer<T>): void;
  unsubscribe(observer: Observer<T>): void;
  notify(event: Event<T>): void;
}