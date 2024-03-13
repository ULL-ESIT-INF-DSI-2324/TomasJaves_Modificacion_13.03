/**
 * Interfaz para los eventos
 * @interface Event
 * @template T Tipo de dato del evento
 * @property {string} id Identificador del evento
 * @property {T} data Datos del evento
 */
export interface Event<T> {
  id: string;
  data: T;
}