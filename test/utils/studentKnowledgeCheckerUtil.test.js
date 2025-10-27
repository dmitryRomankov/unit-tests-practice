import { expect } from 'chai';
import { checkStudentKnowledge } from '../../src/utils/studentKnowledgeCheckerUtil.js';

describe('studentKnowledgeCheckerUtil', () => {
  describe('checkStudentKnowledge', () => {
    it('should return true when all answers are correct', () => {
      const studentAnswers = {
        question1: 'A',
        question2: 'B',
        question3: 'C',
      };
      const correctAnswers = {
        question1: 'A',
        question2: 'B',
        question3: 'C',
      };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
    });

    it('should return false when some answers are incorrect', () => {
      const studentAnswers = {
        question1: 'A',
        question2: 'B',
        question3: 'C',
      };
      const correctAnswers = {
        question1: 'A',
        question2: 'B',
        question3: 'B',
      };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should return false when all answers are incorrect', () => {
      const studentAnswers = {
        question1: 'B',
        question2: 'C',
        question3: 'D',
      };
      const correctAnswers = {
        question1: 'A',
        question2: 'B',
        question3: 'C',
      };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should return false when student has fewer answers than required', () => {
      const studentAnswers = {
        question1: 'A',
        question2: 'B',
      };
      const correctAnswers = {
        question1: 'A',
        question2: 'B',
        question3: 'C',
      };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should return false when student has more answers than required', () => {
      const studentAnswers = {
        question1: 'A',
        question2: 'B',
        question3: 'C',
        question4: 'D',
      };
      const correctAnswers = {
        question1: 'A',
        question2: 'B',
        question3: 'C',
      };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should return false when question keys do not match', () => {
      const studentAnswers = {
        question1: 'A',
        question3: 'B',
        question2: 'C',
      };
      const correctAnswers = {
        question1: 'A',
        question2: 'B',
        question3: 'C',
      };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should handle empty objects', () => {
      const studentAnswers = {};
      const correctAnswers = {};
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
    });

    it('should be case-sensitive', () => {
      const studentAnswers = { question1: 'a' };
      const correctAnswers = { question1: 'A' };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });

    it('should handle numeric answers', () => {
      const studentAnswers = { question1: 42 };
      const correctAnswers = { question1: 42 };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
    });

    it('should handle mixed data type answers', () => {
      const studentAnswers = {
        question1: 'A',
        question2: 42,
        question3: true,
      };
      const correctAnswers = {
        question1: 'A',
        question2: 42,
        question3: true,
      };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.true;
    });

    it('should return false for different data types with same value', () => {
      const studentAnswers = { question1: '42' };
      const correctAnswers = { question1: 42 };
      expect(checkStudentKnowledge(studentAnswers, correctAnswers)).to.be.false;
    });
  });
});
