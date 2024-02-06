const chai = require('chai');
const assert = chai.assert;

const luhnCheck = require('../luhn');

describe('#luhn', function() {

  it('should return true if the number is a number and is valid', function() {
    const number = 83;
    const result = luhnCheck(number);
    assert.isTrue(result);
  });

  it('should return false if the number is a number and is invalid', function() {
    const number = 84;
    const result = luhnCheck(number);
    assert.isFalse(result);
  });

  it('should return false if the number is not a number', function() {
    const number = 'ABCDEFG';
    const result = luhnCheck(number);
    assert.isFalse(result);
  });

  it('should return true if number is a string and is valid', function() {
    const number = '5696 5566 2226 4157';
    const result = luhnCheck(number);
    assert.isTrue(result);
  });

});