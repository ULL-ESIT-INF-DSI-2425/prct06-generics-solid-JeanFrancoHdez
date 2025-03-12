
import { Disco } from "./disco";
import { Single } from "./single";

export class Discografia <T extends (Disco | Single)> {
  private _canciones: T[];

  /**
   * @param canciones - Array de canciones del disco.
   */
  constructor(canciones: T[]) {
    this._canciones = canciones;
  }

  /**
   * Obtiene las canciones del disco.
   * @returns Array de canciones del disco.
   */
  get canciones(): T[] {
    return this._canciones;
  }
}