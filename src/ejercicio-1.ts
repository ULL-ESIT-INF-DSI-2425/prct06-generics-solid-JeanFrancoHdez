
export interface busquedaStreamable<T> {
  /**
   * Busca por nombre.
   * @param nombre - Nombre a buscar.
   */
  porNombre(nombre: T): void;

  /**
   * Busca por año.
   * @param anhio - Año a buscar.
   */
  porAnhio(anhio: T): void;
}

export interface propiedadesStreamable<T, U, W> {
  peliculas: T[];
  series: U[];
  documentales: W[];
}

export abstract class BasicStreamableCollection implements busquedaStreamable<(string | number)>, propiedadesStreamable<Pelicula, Serie, Documental> {
  abstract porNombre(nombre: string): void;
  abstract porAnhio(anhio: number): void;
  peliculas: Pelicula[];
  series: Serie[];
  documentales: Documental[];
}

export class Pelicula {
  constructor(public nombre: string, public anhio: number) {}
}

export class Serie {
  constructor(public nombre: string, public anhio: number) {}
}

export class Documental {
  constructor(public nombre: string, public anhio: number) {}
}

export class PeliculaCollection extends BasicStreamableCollection {
  peliculas: Pelicula[] = [];
  series: Serie[] = [];
  documentales: Documental[] = [];

  /**
   * Busca películas por nombre.
   * @param nombre - Nombre de la película.
   * @returns Películas que coinciden con el nombre.
   */
  porNombre(nombre: string): Pelicula[] {
    return this.peliculas.filter(pelicula => pelicula.nombre === nombre);
  }

  /**
   * Busca películas por año.
   * @param anhio - Año de la película.
   * @returns Películas que coinciden con el año.
   */
  porAnhio(anhio: number): Pelicula[] {
    return this.peliculas.filter(pelicula => pelicula.anhio === anhio);
  }
}

export class SerieCollection extends BasicStreamableCollection {
  peliculas: Pelicula[] = [];
  series: Serie[] = [];
  documentales: Documental[] = [];

  /**
   * Busca series por nombre.
   * @param nombre - Nombre de la serie.
   * @returns Series que coinciden con el nombre.
   */
  porNombre(nombre: string): Serie[] {
    return this.series.filter(serie => serie.nombre === nombre);
  }

  /**
   * Busca series por año.
   * @param anhio - Año de la serie.
   * @returns Series que coinciden con el año.
   */
  porAnhio(anhio: number): Serie[] {
    return this.series.filter(serie => serie.anhio === anhio);
  }
}

export class DocumentalCollection extends BasicStreamableCollection {
  peliculas: Pelicula[] = [];
  series: Serie[] = [];
  documentales: Documental[] = [];

  /**
   * Busca documentales por nombre.
   * @param nombre - Nombre del documental.
   * @returns Documentales que coinciden con el nombre.
   */
  porNombre(nombre: string): Documental[] {
    return this.documentales.filter(documental => documental.nombre === nombre);
  }

  /**
   * Busca documentales por año.
   * @param anhio - Año del documental.
   * @returns Documentales que coinciden con el año.
   */
  porAnhio(anhio: number): Documental[] {
    return this.documentales.filter(documental => documental.anhio === anhio);
  }
}