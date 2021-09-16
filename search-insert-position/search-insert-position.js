/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const searchInsert = (nums, target) =>
{
  let S = 0;
  let E = nums.length - 1;
  let mid = -1;
  if (nums[E] < target) return nums.length;
  if (nums[S] > target) return S;
  while (S <= E)
  {
    mid = Math.floor((S + E) / 2);
    let current = nums[mid];
    if (current === target) return mid;
    (current < target) ? S++ : E--;
  }
  return mid;
};
