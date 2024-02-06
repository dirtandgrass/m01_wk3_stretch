const maxIncreaseFromStart = (start, arr) => {

  let maxGainIndex = arr.reduce((found, elValue, index) => {
    if (elValue - start > arr[found] - start) {
      return index;
    }
    return found;
  });

  let gain = arr[maxGainIndex] - start;
  //if (gain < 0) return {gain:0};
  const result = {buy:0, sell:maxGainIndex + 1, gain};

  return result;
};


const maxIncrease = (arr) => {
  const arrCopy = arr.slice(); // copy values to avoid mutation
  let currHighestTrade = {gain:-Infinity}; // don't gain/lose anything if we don't partake
  for (let i = 0; arrCopy.length > 1; i++) {
    const {sell, gain} = maxIncreaseFromStart(arrCopy.shift(),arrCopy); // find highest gain from current index
    if (gain > currHighestTrade.gain) {
      currHighestTrade = {buy:i, sell:sell + i, gain:gain};
    }
  }

  if (currHighestTrade.gain < 0) return -1;


  return currHighestTrade.gain;
};

console.log(maxIncrease([12, 11, 10, 10, 7, 5, 4]));

module.exports = {
  maxIncreaseFromStart,
  maxIncrease
};
