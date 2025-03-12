
import { Cancion } from "./cancion";

export class Single {
  public readonly nombre: string;
  public readonly fechaPublicacion: number;
  private _cancion: Cancion;

  /**
   * Constructor de la clase Disco.
   * @param nombre - Nombre del single.
   * @param fechaPublicacion - Año de publicación del single.
   * @param cancion - Single publicado.
   */
  constructor(nombre: string, fechaPublicacion: number, cancion: Cancion) {
    this.nombre = nombre;
    this.fechaPublicacion = fechaPublicacion;
    this._cancion = cancion;
  }

  /**
   * Obtiene las canciones del disco.
   * @returns Array de canciones del disco.
   */
  get canciones(): Cancion {
    return this._cancion;
  }
}