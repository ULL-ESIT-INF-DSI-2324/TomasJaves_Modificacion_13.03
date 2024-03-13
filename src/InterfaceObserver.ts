import { Event } from './InterfaceEvent.js';

/**
 * Interfaz para los observadores
 * @interface Observer
 * @template T Tipo de dato del evento
 * @method update Método que se ejecuta cuando el observador recibe un evento
 * @param {Event<T>} event Evento que recibe el observador
 */
export interface Observer<T> {
  update(event: Event<T>): void;
}