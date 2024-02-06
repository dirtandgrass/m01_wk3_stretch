const isValidLuhn = (number) => {

  if (number === undefined) throw new Error("No number provided");
  if (typeof number.toString !== 'function') throw new Error("Invalid input type");

  // toString to work with charecters
  // remove all non-digit characters
  // split the arg into an array of digit-strings
  // reverse the array to make it easier to work with
  const digitArr = number.toString().replace(/[^0-9]/g, '').split('').reverse();

  // remove the first (formally last) digit as checksum
  const lastDigit = +digitArr.shift();
  const sum = digitArr.reduce((acc, curr, i) => {
    const currVal = +curr;
    // if the index is even, double the value
    if (i % 2 === 0) {
      return acc + (currVal * 2 > 9 ? (currVal * 2) - 9 : currVal * 2);
    } else {
      return acc + currVal;
    }
  }, lastDigit); // add the checksum back to the sum
  return sum % 10 === 0;
};

module.exports = isValidLuhn;
