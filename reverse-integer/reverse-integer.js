/**
 * @param {number} x
 * @return {number}
 
 Gameplan for Math approach (using 123 as example input):
  first iteration:
  x = 123
  1: x % 10 = 3
  2: x / 10 = 12
  result: 0*10 + 3 = 0 + 3 = 3
  
  second iteration:
  x = 12
  1: x % 10 = 2
  2: x / 10 = 1
  result: 3*10 + 2 = 30 + 2 = 32
  
  third iteration:
  x = 1
  1: x % 10 = 1
  2: x / 10 = 0
  result: 32*10 + 1 = 320 + 1 = 321
  
  for some of the edge cases like negative inputs, Math.abs can make short work of that and then compare if original input was a negative integer then the returned result will be negative.

const reverse = function(x) {
  let originalX = x
  x = Math.abs(x)
  let result = 0
  while (x != 0) {
    
    let lastDigit = Math.floor(x % 10)
    let newResult = result * 10 + lastDigit
    if ((newResult - lastDigit) / 10 != result) {
      return 0
    }
    x = Math.floor(x /= 10)
    result = newResult
  }
  if (originalX < 0) {
    return -result
  }
  return result
};
*/

//array approach:
const reverse = (x) => {
  const absX = Math.abs(x);
  const xArr = Array.from(String(absX), (num) => num);
  const output = [];
  let leadingZeros = false;

  //iterate backwards initially to handle any leading zeros when reversed later
  for (let j = xArr.length - 1; j >= 0; j--) {
    if (leadingZeros === false && xArr[j] === 0) {
        xArr.pop(j)
    }
  }
  
  //iterate backwards pushing each integer into output array
  for (let i = xArr.length - 1; i >= 0; i--) {
    output.push((xArr[i]));
  }

  //smash the output array together and convert to Number type
  const result = Number(output.join(''));

  //result needs to be within 32-bit signed integer range otherwise return 0
  if (result >= -2147483648 && result <= 2147483647) {
    return x > 0 ? result : -Math.abs(result)
  }
  return 0;
};