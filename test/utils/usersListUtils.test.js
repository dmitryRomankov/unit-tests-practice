import { expect } from 'chai';
import {
  filterUsersByAge,
  sortUsersByName,
  findUserById,
  isEmailTaken,
} from '../../src/utils/usersListUtils.js';

describe('usersListUtils', () => {
  const mockUsers = [
    { id: 1, name: 'John Doe', age: 25, email: 'john@example.com' },
    { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
    { id: 3, name: 'Bob Johnson', age: 22, email: 'bob@example.com' },
    { id: 4, name: 'Alice Brown', age: 35, email: 'alice@example.com' },
    { id: 5, name: 'Charlie Davis', age: 28, email: 'charlie@example.com' },
  ];

  describe('filterUsersByAge', () => {
    it('should filter users within the specified age range', () => {
      const result = filterUsersByAge(mockUsers, 25, 30);
      expect(result).to.have.length(3);
      expect(result.map((user) => user.name)).to.include.members([
        'John Doe',
        'Jane Smith',
        'Charlie Davis',
      ]);
    });

    it('should include users at the boundary ages', () => {
      const result = filterUsersByAge(mockUsers, 22, 25);
      expect(result).to.have.length(2);
      expect(result.map((user) => user.name)).to.include.members([
        'John Doe',
        'Bob Johnson',
      ]);
    });

    it('should return empty array if no users match the age range', () => {
      const result = filterUsersByAge(mockUsers, 40, 50);
      expect(result).to.be.empty;
    });

    it('should handle single age range (minAge === maxAge)', () => {
      const result = filterUsersByAge(mockUsers, 25, 25);
      expect(result).to.have.length(1);
      expect(result[0].name).to.equal('John Doe');
    });

    it('should return all users when age range covers everyone', () => {
      const result = filterUsersByAge(mockUsers, 0, 100);
      expect(result).to.have.length(5);
    });

    it('should handle empty users array', () => {
      const result = filterUsersByAge([], 25, 30);
      expect(result).to.be.empty;
    });

    it('should throw an error for non-array input', () => {
      expect(() => filterUsersByAge('not an array', 25, 30)).to.throw(
        'Users must be an array'
      );
      expect(() => filterUsersByAge(null, 25, 30)).to.throw(
        'Users must be an array'
      );
      expect(() => filterUsersByAge(undefined, 25, 30)).to.throw(
        'Users must be an array'
      );
    });
  });

  describe('sortUsersByName', () => {
    it('should sort users alphabetically by name', () => {
      const result = sortUsersByName(mockUsers);
      const expectedOrder = [
        'Alice Brown',
        'Bob Johnson',
        'Charlie Davis',
        'Jane Smith',
        'John Doe',
      ];
      expect(result.map((user) => user.name)).to.deep.equal(expectedOrder);
    });

    it('should not modify the original array', () => {
      const originalUsers = [...mockUsers];
      const result = sortUsersByName(mockUsers);
      expect(mockUsers).to.deep.equal(originalUsers);
      expect(result).to.not.equal(mockUsers);
    });

    it('should handle users with same names', () => {
      const usersWithSameNames = [
        { id: 1, name: 'John Doe', age: 25, email: 'john1@example.com' },
        { id: 2, name: 'Jane Smith', age: 30, email: 'jane@example.com' },
        { id: 3, name: 'John Doe', age: 35, email: 'john2@example.com' },
      ];
      const result = sortUsersByName(usersWithSameNames);
      expect(result.map((user) => user.name)).to.deep.equal([
        'Jane Smith',
        'John Doe',
        'John Doe',
      ]);
    });

    it('should throw an error for non-array input', () => {
      expect(() => sortUsersByName('not an array')).to.throw(
        'Users must be an array'
      );
      expect(() => sortUsersByName(null)).to.throw('Users must be an array');
      expect(() => sortUsersByName(undefined)).to.throw(
        'Users must be an array'
      );
    });
  });

  describe('findUserById', () => {
    it('should find user by existing ID', () => {
      const result = findUserById(mockUsers, 2);
      expect(result).to.not.be.null;
      expect(result.name).to.equal('Jane Smith');
      expect(result.id).to.equal(2);
    });

    it('should return null for non-existing ID', () => {
      const result = findUserById(mockUsers, 999);
      expect(result).to.be.null;
    });

    it('should find user with first ID', () => {
      const result = findUserById(mockUsers, 1);
      expect(result).to.not.be.null;
      expect(result.name).to.equal('John Doe');
    });

    it('should find user with last ID', () => {
      const result = findUserById(mockUsers, 5);
      expect(result).to.not.be.null;
      expect(result.name).to.equal('Charlie Davis');
    });

    it('should handle string ID that matches numeric ID', () => {
      const result = findUserById(mockUsers, '2');
      expect(result).to.be.null;
    });

    it('should throw an error for non-array input', () => {
      expect(() => findUserById('not an array', 1)).to.throw(
        'Users must be an array'
      );
      expect(() => findUserById(null, 1)).to.throw('Users must be an array');
      expect(() => findUserById(undefined, 1)).to.throw(
        'Users must be an array'
      );
    });
  });

  describe('isEmailTaken', () => {
    it('should return true for existing email', () => {
      const result = isEmailTaken(mockUsers, 'jane@example.com');
      expect(result).to.be.true;
    });

    it('should return false for non-existing email', () => {
      const result = isEmailTaken(mockUsers, 'nonexistent@example.com');
      expect(result).to.be.false;
    });

    it('should be case-sensitive', () => {
      const result = isEmailTaken(mockUsers, 'JANE@EXAMPLE.COM');
      expect(result).to.be.false;
    });

    it('should find first occurrence of duplicate emails', () => {
      const usersWithDuplicateEmails = [
        ...mockUsers,
        { id: 6, name: 'John Clone', age: 26, email: 'john@example.com' },
      ];
      const result = isEmailTaken(usersWithDuplicateEmails, 'john@example.com');
      expect(result).to.be.true;
    });

    it('should throw an error for non-array input', () => {
      expect(() => isEmailTaken('not an array', 'email@test.com')).to.throw(
        'Users must be an array'
      );
      expect(() => isEmailTaken(null, 'email@test.com')).to.throw(
        'Users must be an array'
      );
      expect(() => isEmailTaken(undefined, 'email@test.com')).to.throw(
        'Users must be an array'
      );
    });
  });
});
