/**
 * @param {string} s
 * @return {number}
 */
const countSubstrings = (s) =>
{
  let res = 0;
  for (let i = 0; i < s.length; i++) //odd pal
  {
    let L = i;
    let R = i;
    while (L >= 0 && R < s.length && s[L] === s[R])
    {
      res++;
      L--;
      R++;
    }
  }
  for (let i = 0; i < s.length; i++) //even pal
  {
    let L = i;
    let R = i + 1;
    while (L >= 0 && R < s.length && s[L] === s[R])
    {
      res++;
      L--;
      R++;
    }
  }
  return res;
};