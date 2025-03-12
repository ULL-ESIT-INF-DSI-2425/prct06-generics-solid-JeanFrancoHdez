
import { Disco } from "./disco";
import { Discografia } from "./discografia";
import { Single } from "./single";

export class Artista {
  public readonly nombre: string;
  private _oyentesMensuales: number;
  private _discografia: Discografia<Disco | Single>[];
  
  /**
   * Constructor de la clase Artista.
   * @param nombre - Nombre del artista.
   * @param oyentesMensuales - Número de oyentes mensuales del artista.
   * @param discografia - Array de discos del artista.
   */
  constructor(nombre: string, oyentesMensuales: number, discografia: Discografia<Disco | Single>[]) {
    this.nombre = nombre;
    this._oyentesMensuales = oyentesMensuales;
    this._discografia = discografia;
  }

  /**
   * Obtiene el número de oyentes mensuales del artista.
   * @returns Número de oyentes mensuales.
   */
  get oyentesMensuales(): number {
    return this._oyentesMensuales;
  }

  /**
   * Obtiene la discografía del artista.
   * @returns Array de discos del artista.
   */
  get discografia(): Discografia<Disco | Single>[] {
    return this._discografia;
  }
}