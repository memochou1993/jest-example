const products = require('./products');

test('all product prices are less than 5000', () => {
  const actual = products
    .every((product) => product.price < 5000);
  const expected = true;

  expect(actual).toStrictEqual(expected);
});

test('all products have one image at least', () => {
  const actual = products.every((product) => product.images.length > 0);
  const expected = true;

  expect(actual).toStrictEqual(expected);
});

test('there is a product which description says "no side effects"', () => {
  const actual = products.some((product) => product.description.includes('no side effects'));
  const expected = true;

  expect(actual).toStrictEqual(expected);
});

test('the number of Apple smartphones is 2', () => {
  const actual = products
    .filter((product) => String(product.brand).toUpperCase() === 'APPLE')
    .filter((product) => product.category === 'smartphones')
    .length;
  const expected = 2;

  expect(actual).toStrictEqual(expected);
});

test('the products get over 4.9 rating are fauji and Golden', () => {
  const actual = products
    .filter((product) => product.rating > 4.9)
    .map((product) => ({
      brand: product.brand,
    }));
  const expected = [{ brand: 'fauji' }, { brand: 'Golden' }];

  expect(actual).toStrictEqual(expected);
});

test('the only product of Dry Rose is "Gulab Powder 50 Gram"', () => {
  const actual = products
    .find((product) => product.brand === 'Dry Rose')
    .title;
  const expected = 'Gulab Powder 50 Gram';

  expect(actual).toStrictEqual(expected);
});

test('the total revenue is 765,200 if all the products sold without discount', () => {
  const actual = products
    .reduce((a, b) => a + b.price * b.stock, 0);
  const expected = 765200;

  expect(actual).toStrictEqual(expected);
});
