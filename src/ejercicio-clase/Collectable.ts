/**
 * Interfaz Collectable
 */
export interface Collectable<T> {
  /**
   * Recoje un nuevo item 
   * @param newItem - Item a guardar
   */
  addItem(newItem: T);
  /**
   * Muestra el item requerido
   * @param index - Posición del item
   */
  getItem(index: number): T;
  /**
   * Borra item del array
   * @param index - Posición del item
   */
  removeItem(index: number): T;
  /**
   * Devuelve el número de items
   */
  getNumberOfItems(): number;
}