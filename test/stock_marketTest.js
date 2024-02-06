const chai = require('chai');
const assert = chai.assert;

const {maxIncreaseFromStart, maxIncrease} = require('../stock_market');

describe('#stock_market', function() {

  it('should have a gain of 10 if the stock was bought at 2 and sold at 12', function() {
    const result = maxIncreaseFromStart(2,[ 2, 1, 4, 5, 10, 11, 8, 1, 12]);
    assert.isTrue(result.gain === 10);
  });

  it('should have a gain of 0 if the stock was bought at 12 and not sold', function() {
    const result = maxIncreaseFromStart(12,[ 1, 2, 4, 3, 5, 6, 8, 7, 9]);
    assert.isTrue(result.gain === 0);
  });



  it('should have a return value of -1 if the stock could not have earned money', function() {
    const result = maxIncrease([ 9, 8, 7, 7]);
    assert.isTrue(result === -1);
  });

  it('should have a return value of 100 if the stock could have earned 100', function() {
    const result = maxIncrease([ 2, 1, 0.5, 1,50,75,100,100.5]);
    assert.isTrue(result === 100);
  });

});