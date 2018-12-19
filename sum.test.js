const sum = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  // Arrange
  a = 1
  b = 2

  // Act
  result = sum(a, b)

  // Assert
  expect(result).toBe(3);
});
