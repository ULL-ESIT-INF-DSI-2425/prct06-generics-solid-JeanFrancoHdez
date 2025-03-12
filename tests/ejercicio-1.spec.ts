import { describe, expect, test, beforeEach } from "vitest";
import { Pelicula, Serie, Documental, PeliculaCollection, SerieCollection, DocumentalCollection } from '../src/ejercicio-1';

describe('PeliculaCollection', () => {
  let peliculaCollection: PeliculaCollection;

  beforeEach(() => {
    peliculaCollection = new PeliculaCollection();
    peliculaCollection.peliculas = [
      new Pelicula('Pelicula 1', 2020),
      new Pelicula('Pelicula 2', 2021),
      new Pelicula('Pelicula 1', 2022),
    ];
  });

  test('debería buscar películas por nombre', () => {
    expect(peliculaCollection.porNombre('Pelicula 1')).toEqual([
      new Pelicula('Pelicula 1', 2020),
      new Pelicula('Pelicula 1', 2022),
    ]);
  });

  test('debería buscar películas por año', () => {
    expect(peliculaCollection.porAnio(2021)).toEqual([
      new Pelicula('Pelicula 2', 2021),
    ]);
  });
});

describe('SerieCollection', () => {
  let serieCollection: SerieCollection;

  beforeEach(() => {
    serieCollection = new SerieCollection();
    serieCollection.series = [
      new Serie('Serie 1', 2020),
      new Serie('Serie 2', 2021),
      new Serie('Serie 1', 2022),
    ];
  });

  test('debería buscar series por nombre', () => {
    expect(serieCollection.porNombre('Serie 1')).toEqual([
      new Serie('Serie 1', 2020),
      new Serie('Serie 1', 2022),
    ]);
  });

  test('debería buscar series por año', () => {
    expect(serieCollection.porAnio(2021)).toEqual([
      new Serie('Serie 2', 2021),
    ]);
  });
});

describe('DocumentalCollection', () => {
  let documentalCollection: DocumentalCollection;

  beforeEach(() => {
    documentalCollection = new DocumentalCollection();
    documentalCollection.documentales = [
      new Documental('Documental 1', 2020),
      new Documental('Documental 2', 2021),
      new Documental('Documental 1', 2022),
    ];
  });

  test('debería buscar documentales por nombre', () => {
    expect(documentalCollection.porNombre('Documental 1')).toEqual([
      new Documental('Documental 1', 2020),
      new Documental('Documental 1', 2022),
    ]);
  });

  test('debería buscar documentales por año', () => {
    expect(documentalCollection.porAnio(2021)).toEqual([
      new Documental('Documental 2', 2021),
    ]);
  });
});