import { expect } from 'chai';
import {
  capitalize,
  reverseString,
  isPalindrome,
} from '../../src/utils/stringUtils.js';

describe('stringUtils', () => {
  describe('capitalize', () => {
    it('should capitalize the first letter of a lowercase string', () => {
      expect(capitalize('hello')).to.equal('Hello');
    });

    it('should maintain capitalization of already capitalized string', () => {
      expect(capitalize('Hello')).to.equal('Hello');
    });

    it('should handle single character strings', () => {
      expect(capitalize('a')).to.equal('A');
    });

    it('should handle empty strings', () => {
      expect(capitalize('')).to.equal('');
    });

    it('should handle strings starting with numbers or special characters', () => {
      expect(capitalize('123abc')).to.equal('123abc');
      expect(capitalize('!hello')).to.equal('!hello');
    });

    it('should handle strings with spaces', () => {
      expect(capitalize(' hello')).to.equal(' hello'); // Should we trim() leading spaces?
    });

    it('should throw an error for non-string input', () => {
      expect(() => capitalize(123)).to.throw('Input must be a string');
      expect(() => capitalize(null)).to.throw('Input must be a string');
      expect(() => capitalize(undefined)).to.throw('Input must be a string');
      expect(() => capitalize([])).to.throw('Input must be a string');
    });
  });

  describe('reverseString', () => {
    it('should reverse a simple string', () => {
      expect(reverseString('hello')).to.equal('olleh');
    });

    it('should reverse a string with spaces', () => {
      expect(reverseString('hello world')).to.equal('dlrow olleh');
      expect(reverseString('a b c')).to.equal('c b a');
    });

    it('should handle palindromes', () => {
      expect(reverseString('racecar')).to.equal('racecar');
      expect(reverseString('level')).to.equal('level');
    });

    it('should throw an error for non-string input', () => {
      expect(() => reverseString(123)).to.throw('Input must be a string');
      expect(() => reverseString(null)).to.throw('Input must be a string');
      expect(() => reverseString(undefined)).to.throw('Input must be a string');
      expect(() => reverseString([])).to.throw('Input must be a string');
    });
  });

  describe('isPalindrome', () => {
    it('should return true for palindromic strings', () => {
      expect(isPalindrome('racecar')).to.be.true;
      expect(isPalindrome('level')).to.be.true;
      expect(isPalindrome('madam')).to.be.true;
    });

    it('should return false for non-palindromic strings', () => {
      expect(isPalindrome('hello')).to.be.false;
      expect(isPalindrome('world')).to.be.false;
    });

    it('should be case-sensitive', () => {
      expect(isPalindrome('Racecar')).to.be.false;
      expect(isPalindrome('Level')).to.be.false;
    });

    it('should handle strings with numbers', () => {
      expect(isPalindrome('12321')).to.be.true;
      expect(isPalindrome('12345')).to.be.false;
    });

    it('should handle strings with special characters', () => {
      expect(isPalindrome('a!a')).to.be.true;
      expect(isPalindrome('a!b')).to.be.false;
    });

    it('should handle strings with spaces', () => {
      expect(isPalindrome('a a')).to.be.true;
      expect(isPalindrome('a b')).to.be.false;
    });

    it('should throw an error for non-string input', () => {
      expect(() => isPalindrome(123)).to.throw('Input must be a string');
      expect(() => isPalindrome(null)).to.throw('Input must be a string');
      expect(() => isPalindrome(undefined)).to.throw('Input must be a string');
      expect(() => isPalindrome([])).to.throw('Input must be a string');
    });
  });
});
