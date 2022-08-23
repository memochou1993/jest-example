const products = require('./products');

test('all prices are less than 5000', () => {
  const actual = products.every((u) => u.price < 5000);
  const expected = true;

  expect(actual).toStrictEqual(expected);
});
