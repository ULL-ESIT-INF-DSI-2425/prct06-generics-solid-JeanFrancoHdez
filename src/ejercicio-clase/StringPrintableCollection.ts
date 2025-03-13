import { PrintableCollection } from "./PrintableCollection";

/**
 * Subclase de la abstracta Printable se tipo numérica
 */
export class StringPrintableCollection extends PrintableCollection<string>{
    /**
     * Constructor de la clase StringPrintableCollection
     * @param items - Array de números
     */
    constructor(protected items: string[]) {
      super(items)
    }
    /**
     * Imprimir el contenido de un objeto StringPrintableCollection
     * @returns Devolverá la representación en cadena de los números de la colección separados por comas
     */
    print(): string {
      let result: string = this.items.join(',');
      return result;
    }
}