import { PrintableCollection } from "./PrintableCollection";

/**
 * Subclase de la abstracta Printable se tipo numérica
 */
export class NumericPrintableCollection extends PrintableCollection<number>{
    /**
     * Constructor de la clase NumericPrintableCollection
     * @param items - Array de números
     */
    constructor(protected items: number[]) {
      super(items)
    }
    /**
     * Imprimir el contenido de un objeto NumericPrintableCollection
     * @returns Devolverá la representación en cadena de los números de la colección separados por comas
     */
    print(): string {
      let result: string = this.items.join(',');
      return result;
    }
}