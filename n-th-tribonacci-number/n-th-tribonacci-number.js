/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = (n) =>
{
  let cache =
  {
    '0': 0,
    '1': 1,
    '2': 1
  };
  const recurse = (n) =>
  {
    if (n < 0) return 0;
    if (cache[n]) return cache[n];
    else
    {
      cache[n] = recurse(n - 1) + recurse(n - 2) + recurse(n - 3);
      return cache[n];
    }
  };
  return recurse(n);
};