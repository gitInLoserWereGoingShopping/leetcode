/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
const twoSum = (numbers, target) =>
{
  let cache = {};
  cache[numbers[0]] = 1;
  for (let i = 1; i < numbers.length; i++)
  {
    let num = numbers[i];
    let neededNum = target - num;
    if (cache[neededNum]) return [cache[neededNum], i + 1];
    cache[num] = i + 1;
  }
};