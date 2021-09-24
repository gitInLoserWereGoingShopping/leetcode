/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
const reverseString = (s) =>
{
  let L = 0;
  let R = s.length - 1;
  while (L < R)
  {
    let tmp = s[L];
    s[L] = s[R];
    s[R] = tmp;
    L++;
    R--;
  }
  return s;
};