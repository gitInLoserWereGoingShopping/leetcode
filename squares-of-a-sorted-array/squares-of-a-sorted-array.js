/**
 * @param {number[]} nums
 * @return {number[]}
 */
const sortedSquares = (nums) =>
{
  let squaredNums = nums.map(num => Math.abs(num) * Math.abs(num));
  let L = 0;
  let R = nums.length - 1;
  let res = [];
  while (L <= R)
  {
    if (squaredNums[L] >= squaredNums[R])
    {
      res.push(squaredNums[L]);
      L++;
    } else
    {
      res.push(squaredNums[R]);
      R--;
    }
  }
  return res.reverse();
};