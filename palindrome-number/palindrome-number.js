/**
 * @param {number} x
 * @return {boolean}
 */

const isPalindrome = (x) =>
{
  let xStr = x.toString();
  let L = 0;
  let R = xStr.length - 1;
  while (L < R)
  {
    if (xStr[L] !== xStr[R]) return false;
    L++;
    R--;
  }
  return true;
};
