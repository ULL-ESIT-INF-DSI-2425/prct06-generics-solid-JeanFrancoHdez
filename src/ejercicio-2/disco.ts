
import { Cancion } from "./cancion";

export class Disco {
  public readonly nombre: string;
  public readonly fechaPublicacion: number;
  private _canciones: Cancion[];

  /**
   * Constructor de la clase Disco.
   * @param nombre - Nombre del disco.
   * @param fechaPublicacion - Año de publicación del disco.
   * @param canciones - Array de canciones del disco.
   */
  constructor(nombre: string, fechaPublicacion: number, canciones: Cancion[]) {
    this.nombre = nombre;
    this.fechaPublicacion = fechaPublicacion;
    this._canciones = canciones;
  }

  /**
   * Obtiene las canciones del disco.
   * @returns Array de canciones del disco.
   */
  get canciones(): Cancion[] {
    return this._canciones;
  }
}