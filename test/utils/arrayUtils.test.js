import { expect } from 'chai';
import {
  findMax,
  findMin,
  removeDuplicates,
} from '../../src/utils/arrayUtils.js';

describe('arrayUtils', () => {
  describe('findMax', () => {
    it('should return the maximum value from an array of numbers', () => {
      expect(findMax([1, 5, 3, 9, 2])).to.equal(9);
    });

    it('should handle arrays with duplicate maximum values', () => {
      expect(findMax([5, 5, 5])).to.equal(5);
      expect(findMax([1, 9, 9, 2])).to.equal(9);
    });

    it('should handle arrays with negative numbers', () => {
      expect(findMax([-10, -5, -1, -20])).to.equal(-1);
    });

    it('should handle arrays with zero', () => {
      expect(findMax([0, -1, -2])).to.equal(0);
      expect(findMax([0, 1, 2])).to.equal(2);
    });

    it('should throw an error for non-array input', () => {
      expect(() => findMax('not an array')).to.throw('Input must be an array');
      expect(() => findMax(null)).to.throw('Input must be an array');
      expect(() => findMax(undefined)).to.throw('Input must be an array');
      expect(() => findMax(123)).to.throw('Input must be an array');
    });

    it('should handle empty arrays', () => {
      expect(findMax([])).to.equal(-Infinity);
    });
  });

  describe('findMin', () => {
    it('should return the minimum value from an array of numbers', () => {
      expect(findMin([1, 5, 3, 9, 2])).to.equal(1);
      expect(findMin([10])).to.equal(10);
    });

    it('should handle arrays with duplicate minimum values', () => {
      expect(findMin([5, 5, 5])).to.equal(5);
      expect(findMin([1, 9, 1, 2])).to.equal(1);
    });

    it('should handle arrays with negative numbers', () => {
      expect(findMin([-10, -5, -1, -20])).to.equal(-20);
    });

    it('should handle arrays with zero', () => {
      expect(findMin([0, 1, 2])).to.equal(0);
      expect(findMin([0, -1, -2])).to.equal(-2);
    });

    it('should throw an error for non-array input', () => {
      expect(() => findMin('not an array')).to.throw('Input must be an array');
      expect(() => findMin(null)).to.throw('Input must be an array');
      expect(() => findMin(undefined)).to.throw('Input must be an array');
      expect(() => findMin(123)).to.throw('Input must be an array');
    });

    it('should handle empty arrays', () => {
      expect(findMin([])).to.equal(Infinity);
    });
  });

  describe('removeDuplicates', () => {
    it('should remove duplicates from an array of numbers', () => {
      const result = removeDuplicates([1, 2, 2, 3, 3, 3, 4]);
      expect(result).to.deep.equal([1, 2, 3, 4]);
    });

    it('should remove duplicates from an array of strings', () => {
      const result = removeDuplicates(['a', 'b', 'b', 'c', 'a']);
      expect(result).to.deep.equal(['a', 'b', 'c']);
    });

    it('should handle arrays with no duplicates', () => {
      const result = removeDuplicates([1, 2, 3, 4]);
      expect(result).to.deep.equal([1, 2, 3, 4]);
    });

    it('should handle arrays with all duplicate elements', () => {
      const result = removeDuplicates([5, 5, 5, 5]);
      expect(result).to.deep.equal([5]);
    });

    it('should handle empty arrays', () => {
      const result = removeDuplicates([]);
      expect(result).to.deep.equal([]);
    });

    it('should handle arrays with mixed data types', () => {
      const result = removeDuplicates([1, '1', 2, '2', 1, 2]);
      expect(result).to.deep.equal([1, '1', 2, '2']);
    });

    it('should throw an error for non-array input', () => {
      expect(() => removeDuplicates('not an array')).to.throw(
        'Input must be an array',
      );
      expect(() => removeDuplicates(null)).to.throw('Input must be an array');
      expect(() => removeDuplicates(undefined)).to.throw(
        'Input must be an array',
      );
      expect(() => removeDuplicates(123)).to.throw('Input must be an array');
    });
  });
});
