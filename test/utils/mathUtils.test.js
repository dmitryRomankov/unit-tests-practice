import { expect } from 'chai';
import { add, subtract, multiply, divide } from '../../src/utils/mathUtils.js';

describe('mathUtils', () => {
  describe('add', () => {
    it('should add two positive numbers', () => {
      expect(add(10, 15)).to.equal(25);
    });

    it('should add positive and negative numbers', () => {
      expect(add(-5, 3)).to.equal(-2);
    });

    it('should add two negative numbers', () => {
      expect(add(-2, -3)).to.equal(-5);
    });

    it('should add with zero', () => {
      expect(add(5, 0)).to.equal(5);
      expect(add(0, 0)).to.equal(0);
    });

    it('should handle decimal numbers', () => {
      expect(add(2.5, 3.7)).to.be.closeTo(6.2, 0.0001);
      expect(add(0.1, 0.2)).to.be.closeTo(0.3, 0.0001);
    });
  });

  describe('subtract', () => {
    it('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).to.equal(2);
    });

    it('should subtract positive and negative numbers', () => {
      expect(subtract(5, -3)).to.equal(8);
    });

    it('should subtract two negative numbers', () => {
      expect(subtract(-2, -3)).to.equal(1);
    });

    it('should subtract with zero', () => {
      expect(subtract(5, 0)).to.equal(5);
      expect(subtract(0, 0)).to.equal(0);
    });

    it('should handle decimal numbers', () => {
      expect(subtract(5.7, 2.3)).to.be.closeTo(3.4, 0.0001);
      expect(subtract(0.3, 0.1)).to.be.closeTo(0.2, 0.0001);
    });
  });

  describe('multiply', () => {
    it('should multiply two positive numbers', () => {
      expect(multiply(3, 4)).to.equal(12);
    });

    it('should multiply positive and negative numbers', () => {
      expect(multiply(5, -3)).to.equal(-15);
    });

    it('should multiply two negative numbers', () => {
      expect(multiply(-2, -3)).to.equal(6);
    });

    it('should multiply with zero', () => {
      expect(multiply(5, 0)).to.equal(0);
      expect(multiply(0, 0)).to.equal(0);
    });

    it('should multiply with one', () => {
      expect(multiply(5, 1)).to.equal(5);
    });

    it('should handle decimal numbers', () => {
      expect(multiply(2.5, 4)).to.equal(10);
      expect(multiply(0.5, 0.5)).to.equal(0.25);
    });
  });

  describe('divide', () => {
    it('should divide two positive numbers', () => {
      expect(divide(10, 2)).to.equal(5);
    });

    it('should divide positive and negative numbers', () => {
      expect(divide(10, -2)).to.equal(-5);
    });

    it('should divide two negative numbers', () => {
      expect(divide(-10, -2)).to.equal(5);
    });

    it('should divide by one', () => {
      expect(divide(5, 1)).to.equal(5);
      expect(divide(-5, 1)).to.equal(-5);
    });

    it('should divide zero by a number', () => {
      expect(divide(0, 5)).to.equal(0);
    });

    it('should handle decimal division', () => {
      expect(divide(7.5, 2.5)).to.equal(3);
      expect(divide(1, 3)).to.be.closeTo(0.3333, 0.0001);
    });

    it('should throw an error when dividing by zero', () => {
      expect(() => divide(5, 0)).to.throw('Cannot divide by zero');
      expect(() => divide(-5, 0)).to.throw('Cannot divide by zero');
      expect(() => divide(0, 0)).to.throw('Cannot divide by zero');
    });
  });
});
