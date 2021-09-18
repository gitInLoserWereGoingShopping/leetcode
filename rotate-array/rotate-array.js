/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const rotate = (nums, k) =>
{
  if (k === 0 || nums.length === 1) return nums;
  
  let j = k;
  if (k > nums.length) j %= nums.length;
  
  nums.unshift(...nums.slice(-j));
  nums.length -= j;
}