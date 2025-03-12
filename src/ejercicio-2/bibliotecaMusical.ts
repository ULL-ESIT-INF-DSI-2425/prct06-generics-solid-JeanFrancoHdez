import { Artista } from "./artitsta";
import { Single } from "./single";

export class bibliotecaMusical {
  /**
   * Constructor de la clase bibliotecaMusical.
   * @param artistas - Array de artistas que forman la biblioteca.
   */
  constructor(public artistas: Artista[]) {}

  /**
   * Agrega un nuevo artista a la biblioteca.
   * @param artista - Artista a agregar.
   */
  agregarArtista(artista: Artista) {
    this.artistas.push(artista);
  }

  /**
   * Muestra la información de los artistas en formato de tabla.
   * @param artistas - Array de artistas a mostrar. Por defecto, muestra todos los artistas de la biblioteca.
   */
  mostrarInformacion(artistas: Artista[] = this.artistas): void {
    console.table(artistas.map(artista => ({
      Nombre: artista.nombre,
      'Oyentes Mensuales': artista.oyentesMensuales,
      Discografia: artista.discografia.map(disco => {
        if ('nombre' in disco) {
          return disco.nombre;
        } else {
          return (disco as unknown as Single).nombre;
        }
      }).join(', ')
    })));
  }

  /**
   * Busca artistas por nombre y muestra la información en formato de tabla.
   * @param nombre_artista - Nombre del artista a buscar.
   */
  buscarArtista(nombre_artista: string): void {
    const artistasEncontrados = this.artistas.filter(artista => artista.nombre === nombre_artista);
    if (artistasEncontrados.length > 0) {
      this.mostrarInformacion(artistasEncontrados);
    } else {
      console.log(`No se encontró ningún artista con el nombre "${nombre_artista}".`);
    }
  }

  /**
   * Busca discos por nombre y muestra la información de los artistas que tienen esos discos.
   * @param nombre_disco - Nombre del disco a buscar.
   */
  buscarDisco(nombre_disco: string): void {
    const discosEncontrados = this.artistas.filter(artista => 
      artista.discografia.some(disco => {
        if ('nombre' in disco) {
          return disco.nombre === nombre_disco;
        }
        return false;
      })
    );
    if (discosEncontrados.length > 0) {
      this.mostrarInformacion(discosEncontrados);
    } else {
      console.log(`No se encontró ningún disco con el nombre "${nombre_disco}".`);
    }
  }

  /**
   * Busca canciones por nombre y muestra la información de los artistas que tienen esas canciones.
   * @param nombre_cancion - Nombre de la canción a buscar.
   */
  buscarCancion(nombre_cancion: string): void {
    const cancionesEncontradas = this.artistas.filter(artista => 
      artista.discografia.some(disco => disco.canciones.some(cancion => cancion.nombre === nombre_cancion))
    );
    if (cancionesEncontradas.length > 0) {
      this.mostrarInformacion(cancionesEncontradas);
    } else {
      console.log(`No se encontró ninguna canción con el nombre "${nombre_cancion}".`);
    }
  }

  /**
   * Devuelve el número de canciones en un disco específico.
   * @param nombre_disco - Nombre del disco.
   * @returns Número de canciones en el disco.
   */
  cancionesPorDisco(nombre_disco: string): number {
    for (const artista of this.artistas) {
      for (const disco of artista.discografia) {
        if ('nombre' in disco && disco.nombre === nombre_disco) {
          return disco.canciones.length;
        }
      }
    }
    console.log(`No se encontró ningún disco con el nombre "${nombre_disco}".`);
    return 0;
  }

  /**
   * Calcula la duración total de un disco específico.
   * @param nombre_disco - Nombre del disco.
   * @returns Duración total del disco en segundos.
   */
  duracionDisco(nombre_disco: string): number {
    let duracion_total: number = 0;
    for (const artista of this.artistas) {
      for (const disco of artista.discografia) {
        if ('nombre' in disco && disco.nombre === nombre_disco) {
          for (const cancion of disco.canciones) {
            if ('duracion' in cancion) {
              duracion_total += cancion.duracion as number;
            }
          }
          return duracion_total;
        }
      }
    }
    console.log(`No se encontró ningún disco con el nombre "${nombre_disco}".`);
    return 0;
  }

  /**
   * Calcula el número total de reproducciones de un disco específico.
   * @param nombre_disco - Nombre del disco.
   * @returns Número total de reproducciones del disco.
   */
  reproduccionesDisco(nombre_disco: string): number {
    let reproducciones_total: number = 0;
    for (const artista of this.artistas) {
      for (const disco of artista.discografia) {
        if ('nombre' in disco && disco.nombre === nombre_disco) {
          for (const cancion of disco.canciones) {
            if ('reproducciones' in cancion) {
              reproducciones_total += cancion.reproducciones as number;
            }
          }
          return reproducciones_total;
        }
      }
    }
    console.log(`No se encontró ningún disco con el nombre "${nombre_disco}".`);
    return 0;
  }
}