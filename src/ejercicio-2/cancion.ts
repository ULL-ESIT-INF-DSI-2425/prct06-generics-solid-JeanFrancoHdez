
export class Cancion {
  /**
   * Constructor de la clase Cancion.
   * @param nombre - Nombre de la canción.
   * @param duracion - Duración de la canción en segundos.
   * @param generos - Array de géneros de la canción.
   * @param single - Indica si la canción es un single.
   * @param reproducciones - Número de reproducciones de la canción.
   */
  constructor(
    public readonly nombre: string,
    public readonly duracion: number,
    public readonly generos: string[],
    public readonly single: boolean,
    public readonly reproducciones: number
  ) {}
}