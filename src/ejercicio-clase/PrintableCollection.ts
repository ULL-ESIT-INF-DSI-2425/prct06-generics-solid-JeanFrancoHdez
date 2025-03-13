import { Printable } from "./Printable";
import { Collectable } from "./Collectable";
/**
 * Clase abstracta PrintableCollection
 */
export abstract class PrintableCollection<T> implements Printable,Collectable<T> {
    /**
     * Constructor de la clase abstracta PrintableColletion
     * @param items - Array de tipo T
     */
    constructor(protected items: T[]) {}
    /**
     * Añade un nuevo elemento al Array
     * @param newItem - Elemento tipo T a añadir
     */
    addItem(newItem: T) {
      this.items.push(newItem);
    }

    /**
     * Muestra un elemento del array
     * @param index - Posición del elemento en el array 
     * @returns Elemento en esa posición
     */
    getItem(index: number) {
      return this.items[index];
    }

    /**
     * Elimina elemento del array
     * @param index - Posición del elemento
     * @returns Elemento que se eliminó
     */
    removeItem(index: number) {
      let eliminate: T[] = this.items.slice(index);
      return eliminate[0];
    }

    /**
     * Da el número de elementos en el array
     * @returns Tamaño del array
     */
    getNumberOfItems() {
      return this.items.length;
    }
    
    /**
     * Busca elemento en el array
     */
    abstract print(): string;
}