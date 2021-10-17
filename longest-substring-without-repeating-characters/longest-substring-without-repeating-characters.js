/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = (s) =>
{
  if (!s.length) return 0;
  let max = 1;
  let L = 0;
  let R = L + 1;
  let set = new Set().add(s[L]);
  while (L <= s.length)
  {
    if (s[R] !== undefined && !set.has(s[R]))
    {
      set.add(s[R]);
      if (set.size > max) max++;
      R++;
    }
    else
    {
      L++;
      set = new Set().add(s[L]);
      R = L + 1;
    }
  }
  return max;
};