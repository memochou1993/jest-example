const products = require('./products');

const practice = {
  case9() {
    const res = products
      .every((product) => product.images.length > 0);
    return res;
  },
  case10() {
    const res = products
      .some((product) => product.description.includes('no side effects'));
    return res;
  },
  case11() {
    const res = products
      .filter((product) => product.category === 'smartphones')
      .length;
    return res;
  },
  case12() {
    const res = products
      .filter((product) => product.rating > 4.9)
      .map((product) => ({
        brand: product.brand,
      }));
    return res;
  },
  case13() {
    const res = products
      .find((product) => product.brand === 'Dry Rose')
      .title;
    return res;
  },
  case14() {
    const res = products
      .reduce((a, b) => a + b.price * b.stock, 0);
    return res;
  },
  case15() {
    const res = products
      .sort((a, b) => b.discountPercentage - a.discountPercentage)
      .map((p) => p.brand)
      .slice(0, 3);
    return res;
  },
  case16() {
    const brands = {};
    products
      .forEach((p) => {
        if (!brands[p.brand]) {
          brands[p.brand] = true;
        }
      });
    const res= Object.keys(brands).length;
    return res;
  },
};

module.exports = practice;
