import { describe, expect, test, beforeEach, vi } from "vitest";
import { bibliotecaMusical } from '../src/ejercicio-2/bibliotecaMusical';
import { Artista } from '../src/ejercicio-2/artitsta';
import { Disco } from "../src/ejercicio-2/disco";
import { Cancion } from "../src/ejercicio-2/cancion"
import { Discografia } from "../src/ejercicio-2/discografia";

describe('bibliotecaMusical', () => {
  let cancion1: Cancion;
  let cancion2: Cancion;
  let disco1: Disco;
  let disco2: Disco;
  let artista1: Artista;
  let artista2: Artista;
  let biblioteca: bibliotecaMusical;

  beforeEach(() => {
    cancion1 = new Cancion('Cancion 1', 200, ['Pop'], true, 1000);
    cancion2 = new Cancion('Cancion 2', 180, ['Rock'], false, 500);
    disco1 = new Disco('Disco 1', 2020, [cancion1, cancion2]);
    disco2 = new Disco('Disco 2', 2021, [cancion1]);
    artista1 = new Artista('Artista 1', 10000, [new Discografia([disco1, disco2])]);
    artista2 = new Artista('Artista 2', 5000, [new Discografia([disco1])]);
    biblioteca = new bibliotecaMusical([artista1, artista2]);
  });

  test('debería agregar un nuevo artista a la biblioteca', () => {
    const nuevoArtista = new Artista('Artista 3', 3000, [new Discografia([disco2])]);
    biblioteca.agregarArtista(nuevoArtista);
    expect(biblioteca.artistas).toContain(nuevoArtista);
  });

  test('debería mostrar la información de todos los artistas en formato de tabla', () => {
    console.table = vi.fn();
    biblioteca.mostrarInformacion();
    expect(console.table).toHaveBeenCalled();
  });

  test('debería buscar artistas por nombre y mostrar la información en formato de tabla', () => {
    console.table = vi.fn();
    biblioteca.buscarArtista('Artista 1');
    expect(console.table).toHaveBeenCalled();
  });

  test('debería mostrar un mensaje si no se encuentra ningún artista con el nombre proporcionado', () => {
    console.log = vi.fn();
    biblioteca.buscarArtista('Artista Desconocido');
    expect(console.log).toHaveBeenCalledWith('No se encontró ningún artista con el nombre "Artista Desconocido".');
  });
});