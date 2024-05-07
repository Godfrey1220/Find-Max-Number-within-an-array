const findMaxNumber = require('./find-max')


test('This should find the biggest number within an array', () => {
    expect(findMaxNumber([1, 2, 3, 3, 1, 1, 6, 3])).toBe(6)
    expect(findMaxNumber([1, 2, 3, 11, 1, 1, 6, 3])).toBe(6)
    expect(findMaxNumber([1, 2, 3, 3, 9, 1, 6, 3])).toBe(9)
});
