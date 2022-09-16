const products = require('./products');

const practice = {
  case0() {
    const res = products
      .every((product) => product.price < 5000);
    return res;
  },
};

module.exports = practice;
