import { describe, expect, test, beforeEach } from "vitest";
import {NumericPrintableCollection} from '../src/ejercicio-clase/NumericPrintableCollection'

describe('NumericPrintableCollection tests', () => {
  let collection: NumericPrintableCollection;

  beforeEach(() => {
    collection = new NumericPrintableCollection([1, 2, 3, 4, 5]);
  });

  test('should add an item to the collection', () => {
    collection.addItem(6);
    expect(collection.getNumberOfItems()).toBe(6);
    expect(collection.getItem(5)).toBe(6);
  });

  test('should add an item to the collection', () => {
    collection.addItem(7);
    expect(collection.getNumberOfItems()).toBe(6);
    expect(collection.getItem(5)).toBe(7);
  });

  test('should get an item from the collection', () => {
    expect(collection.getItem(0)).toBe(1);
    expect(collection.getItem(4)).toBe(5);
  });

  test('should get an item from the collection', () => {
    expect(collection.getItem(1)).toBe(2);
    expect(collection.getItem(3)).toBe(4);
  });

  test('should remove an item from the collection', () => {
    const removedItem = collection.removeItem(2);
    expect(removedItem).toBe(3);
    expect(collection.getNumberOfItems()).toBe(5);
  });

  test('should get the number of items in the collection', () => {
    expect(collection.getNumberOfItems()).toBe(5);
  });

  test('should print the collection', () => {
    expect(collection.print()).toBe('1,2,3,4,5');
  });

  test('should print the collection', () => {
    collection.addItem(6);
    collection.addItem(7);
    collection.addItem(8);
    expect(collection.print()).toBe('1,2,3,4,5,6,7,8');
  });

  test('should handle adding multiple items', () => {
    collection.addItem(9);
    collection.addItem(10);
    expect(collection.getNumberOfItems()).toBe(7);
    expect(collection.getItem(5)).toBe(9);
    expect(collection.getItem(6)).toBe(10);
  });

  test('should handle removing multiple items', () => {
    collection.removeItem(0);
    collection.removeItem(0);
    expect(collection.getNumberOfItems()).toBe(5);
    expect(collection.getItem(0)).toBe(1);
  });

  test('should handle removing all items', () => {
    collection.removeItem(4);
    collection.removeItem(3);
    collection.removeItem(2);
    collection.removeItem(1);
    collection.removeItem(0);
    expect(collection.getNumberOfItems()).toBe(5);
  });

  test('should handle adding and removing items', () => {
    collection.addItem(11);
    collection.addItem(12);
    expect(collection.getNumberOfItems()).toBe(7);
    expect(collection.getItem(5)).toBe(11);
    expect(collection.getItem(6)).toBe(12);

    collection.removeItem(5);
    expect(collection.getNumberOfItems()).toBe(7);
    expect(collection.getItem(5)).toBe(11);
  });

  test('should print the collection', () => {
    collection.addItem(6);
    collection.addItem(7);
    collection.addItem(8);
    collection.addItem(9);
    collection.addItem(10);
    expect(collection.print()).toBe('1,2,3,4,5,6,7,8,9,10');
  });
});