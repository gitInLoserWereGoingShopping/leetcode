/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) =>
  {
    if (s.length === 0) return 0;
    let max = 1;
    let counter = 1;
    let L = 0;
    let R = L + 1;
    let map = new Map().set(s[L], 1);
    while (L <= s.length)
    {
      if (s[R] !== undefined && !map.has(s[R]))
      {
        counter++;
        if (counter > max) max++;
        map.set(s[R], 1);
        R++;
      }
      else
      {
        counter = 1;
        L++;
        map = new Map().set(s[L], 1);
        R = L + 1;
      }
    }
    return max;
  };