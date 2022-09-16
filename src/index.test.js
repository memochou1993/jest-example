const practice = require('.');

test('case9 should determine that all products have one image at least', () => {
  const actual = practice.case9();
  const expected = true;

  expect(actual).toStrictEqual(expected);
});

test('case10 should determine that there is a product which description says "no side effects"', () => {
  const actual = practice.case10();
  const expected = true;

  expect(actual).toStrictEqual(expected);
});

test('case11 should get the number of smartphones', () => {
  const actual = practice.case11();
  const expected = 5;

  expect(actual).toStrictEqual(expected);
});

test('case12 should get the brand of products which get over 4.9 rating', () => {
  const actual = practice.case12();
  const expected = [{ brand: 'fauji' }, { brand: 'Golden' }];

  expect(actual).toStrictEqual(expected);
});

test('case13 should get the only product of Dry Rose', () => {
  const actual = practice.case13();
  const expected = 'Gulab Powder 50 Gram';

  expect(actual).toStrictEqual(expected);
});

test('case14 should get the total revenue when all the products sold without discount', () => {
  const actual = practice.case14();
  const expected = 765200;

  expect(actual).toStrictEqual(expected);
});

test('case15 should get the top 3 highest discounted product brands',  () => {
  const actual = practice.case15();
  const expected = ['Apple', 'OPPO', 'Boho Decor'];

  expect(actual).toStrictEqual(expected);
});

test('case16 should get the number of product brands',  () => {
  const actual = practice.case16();
  const expected = 28;

  expect(actual).toStrictEqual(expected);
});
