/**
 * @param {string[]} strs
 * @return {string}
 */
const longestCommonPrefix = (strs) =>
{
  let res = "";
  let firstStr = strs[0];
  for (let i = 0; i < firstStr.length; i++)
  {
    let char = firstStr[i];
    for (let j = 1; j < strs.length; j++)
    {
      if (char !== strs[j][i]) return res;
    }
    res += char;
  }
  return res;
};