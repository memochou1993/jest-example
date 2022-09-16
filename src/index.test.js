const practice = require('.');

test('case0 should determine all product prices are less than 5000',  () => {
  const actual = practice.case0();
  const expected = true;

  expect(actual).toStrictEqual(expected);
});
