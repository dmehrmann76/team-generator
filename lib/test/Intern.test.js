const Intern = require('../lib/intern');

test('Can set school via constructor', () => {
  const testValue = 'Oxford';
  const e = new Intern('Ringo', 1, 'test@email.com', testValue);
  expect(e.school).toBe(testValue);
});

test('getRole() should return "Intern"', () => {
  const testValue = 'Intern';
  const e = new Intern('Ringo', 1, 'test@email.com', 'Oxford');
  expect(e.getRole()).toBe(testValue);
});

test('Can get school via getSchool()', () => {
  const testValue = 'Oxford';
  const e = new Intern('Ringo', 1, 'test@email.com', testValue);
  expect(e.getSchool()).toBe(testValue);
});