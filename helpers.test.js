const { containsName, updateAge, findName } = require('./helpers');

describe('containsName function', () => {
  test('it should return true', () => {
    const persons = [
      { name: 'ed', age: 30, },
      { name: 'x', age: 4, },
      { name: 'tom', age: 99, },
    ];
    expect(containsName(persons, 'ed')).toBe(true);
  });
  test('it should return true', () => {
    const persons = [
      { name: 'ed', age: 30, },
      { name: 'x', age: 4, },
      { name: 'tom', age: 99, },
    ];
    expect(containsName(persons, 'x')).toBe(true);
  });
  test('it should return true', () => {
    const persons = [
      { name: 'ed', age: 30, },
      { name: 'x', age: 4, },
      { name: 'tom', age: 99, },
    ];
    expect(containsName(persons, 'tom')).toBe(true);
  });
  test('it should return false', () => {
    const persons = [
      { name: 'ed', age: 30, },
      { name: 'x', age: 4, },
      { name: 'tom', age: 99, },
    ];
    expect(containsName(persons, 'z')).toBe(false);
  });
});

describe('updateAge function', () => {
  test('it should update the age', () => {
    const persons = [
      { name: 'ed', age: 30, },
      { name: 'x', age: 4, },
      { name: 'tom', age: 99, },
    ];
    updateAge(persons, 'ed', 2)
    expect(persons[0].age).toBe(2);
  });
  test('it should update the age', () => {
    const persons = [
      { name: 'ed', age: 30, },
      { name: 'x', age: 4, },
      { name: 'tom', age: 99, },
    ];
    updateAge(persons, 'x', 26)
    expect(persons[1].age).toBe(26);
  });
  test('it should update the age', () => {
    const persons = [
      { name: 'ed', age: 30, },
      { name: 'x', age: 4, },
      { name: 'tom', age: 99, },
    ];
    updateAge(persons, 'tom', 992)
    expect(persons[2].age).toBe(992);
  });
  test('it should not update any ages', () => {
    const persons = [
      { name: 'ed', age: 30, },
      { name: 'x', age: 4, },
      { name: 'tom', age: 99, },
    ];
    updateAge(persons, 'sam', 992)
    expect(persons[2].age).toBe(99);
  });
});

describe('findName function', () => {
  test('it should return the correct payload', () => {
    const persons = [
      { name: 'ed', age: 30, },
      { name: 'x', age: 4, },
      { name: 'tom', age: 99, },
    ];
    expect(findName(persons, 'ed')).toBe(persons[0]);
  });
  test('it should return the correct payload', () => {
    const persons = [
      { name: 'ed', age: 30, },
      { name: 'x', age: 4, },
      { name: 'tom', age: 99, },
    ];
    expect(findName(persons, 'x')).toBe(persons[1]);
  });
  test('it should return the correct payload', () => {
    const persons = [
      { name: 'ed', age: 30, },
      { name: 'x', age: 4, },
      { name: 'tom', age: 99, },
    ];
    expect(findName(persons, 'tom')).toBe(persons[2]);
  });
  test('it should return undefined', () => {
    const persons = [
      { name: 'ed', age: 30, },
      { name: 'x', age: 4, },
      { name: 'tom', age: 99, },
    ];
    expect(findName(persons, 'jack')).toBe(undefined);
  });
});
