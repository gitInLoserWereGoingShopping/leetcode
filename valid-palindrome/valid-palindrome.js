/**
 * @param {string} s
 * @return {boolean}
 */

const isPalindrome = (s) =>
{
  let alphaNumStr = ''
  for (let char of s)
  {
    if (char.match(/^[0-9a-zA-Z]+$/)) alphaNumStr += char;
  }
  let L = 0;
  let R = alphaNumStr.length - 1;
  alphaNumStr = alphaNumStr.toLowerCase();
  while (L < R)
  {
    if (alphaNumStr[L] !== alphaNumStr[R]) return false;
    L++;
    R--;
  }
  return true;
};
