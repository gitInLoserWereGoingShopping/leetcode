/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (nums, target) =>
{
  let R = nums.length - 1;
  for (let L = 0; L < nums.length; L++)
  {
    for (let R = L + 1; R < nums.length; R++)
    {
      let sum = nums[L] + nums[R];
      if (sum === target) return [L, R];
    }
  }
};