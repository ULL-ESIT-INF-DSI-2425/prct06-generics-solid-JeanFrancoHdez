import { describe, expect, test, beforeEach } from "vitest";
import {StringPrintableCollection} from '../src/ejercicio-clase/StringPrintableCollection'

describe('StringPrintableCollection tests', () => {
  let collection: StringPrintableCollection;

  beforeEach(() => {
    collection = new StringPrintableCollection(['Hola', 'Jean', 'DSI', 'test', 'camelCase']);
  });

  test('should add an item to the collection', () => {
    collection.addItem('Añadir');
    expect(collection.getNumberOfItems()).toBe(6);
    expect(collection.getItem(5)).toBe('Añadir');
  });

  test('should add an item to the collection', () => {
    collection.addItem('otroMás');
    expect(collection.getNumberOfItems()).toBe(6);
    expect(collection.getItem(5)).toBe('otroMás');
  });

  test('should get an item from the collection', () => {
    expect(collection.getItem(0)).toBe('Hola');
    expect(collection.getItem(4)).toBe('camelCase');
  });

  test('should get an item from the collection', () => {
    expect(collection.getItem(1)).toBe('Jean');
    expect(collection.getItem(3)).toBe('test');
  });

  test('should remove an item from the collection', () => {
    const removedItem = collection.removeItem(2);
    expect(removedItem).toBe('DSI');
    expect(collection.getNumberOfItems()).toBe(5);
  });

  test('should get the number of items in the collection', () => {
    expect(collection.getNumberOfItems()).toBe(5);
  });

  test('should print the collection', () => {
    expect(collection.print()).toBe('Hola,Jean,DSI,test,camelCase');
  });

  test('should print the collection', () => {
    collection.addItem('Prueba');
    collection.addItem('final');
    collection.addItem('cadenas');
    expect(collection.print()).toBe('Hola,Jean,DSI,test,camelCase,Prueba,final,cadenas');
  });

  test('should handle adding and removing items', () => {
    collection.addItem('nuevo');
    collection.addItem('elemento');
    expect(collection.getNumberOfItems()).toBe(7);
    expect(collection.getItem(5)).toBe('nuevo');
    expect(collection.getItem(6)).toBe('elemento');

    collection.removeItem(5);
    expect(collection.getNumberOfItems()).toBe(7);
    expect(collection.getItem(5)).toBe('nuevo');
  });

  test('should handle adding duplicate items', () => {
    collection.addItem('Hola');
    expect(collection.getNumberOfItems()).toBe(6);
    expect(collection.getItem(5)).toBe('Hola');
  });

  test('should print the collection', () => {
    collection.addItem('Prueba');
    collection.addItem('final');
    collection.addItem('cadenas');
    collection.addItem('alguna');
    collection.addItem('más');
    expect(collection.print()).toBe('Hola,Jean,DSI,test,camelCase,Prueba,final,cadenas,alguna,más');
  });
});