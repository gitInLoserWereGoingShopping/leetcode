/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const intersect = (nums1, nums2) =>
{
  const numTracker = {};
  const res = [];
  for (let num of nums1)
  {
    numTracker[num] = (numTracker[num] || 0) + 1;
  }
  for (let num of nums2)
  {
    if (numTracker[num])
    {
      res.push(num);
      numTracker[num]--;
    }
  }
  return res;
};