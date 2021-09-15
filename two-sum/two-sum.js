/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

//Current solution - Time: 76 ms (86.49%), Space: 40.5 MB (38.90%) - LeetHub
const twoSum = (nums, target) =>
{
  let cache = {};
  cache[nums[0]] = 0;
  for (let i = 1; i < nums.length; i++)
  {
    let current = nums[i];
    let neededNum = target - current;
    if (cache[neededNum] !== undefined) return [i, cache[neededNum]];
    cache[nums[i]] = i;
  }
};

//Initial solution - Time: 158 ms (24.04%), Space: 39 MB (96.70%) - LeetHub
// const twoSum = (nums, target) =>
// {
//   let R = nums.length - 1;
//   for (let L = 0; L < nums.length; L++)
//   {
//     for (let R = L + 1; R < nums.length; R++)
//     {
//       let sum = nums[L] + nums[R];
//       if (sum === target) return [L, R];
//     }
//   }
// };
