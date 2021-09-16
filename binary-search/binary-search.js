const search = (nums, target) =>
{
  let L = 0;
  let R = nums.length - 1;
  while (L <= R)
  {
    let middle = Math.floor((L + R) / 2);
    let current = nums[middle];
    if (target === current) return middle;
    if (target > current)
    {
      L = middle + 1;
    } else
    {
      R = middle - 1;
    }
  }
  return -1;
};