/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const moveZeroes = (nums) =>
{
  if (nums.length < 2) return nums;
  let L = 0;
  let R = 0;
  while (R < nums.length)
  {
    if (nums[R] === 0) R++;
    if (nums[R] !== 0 && R < nums.length)
    {
      let storedNum = nums[L];
      nums[L] = nums[R];
      nums[R] = storedNum;
      L++;
      R++;
    }
  }
};
