/**
 * @param {string} s
 * @return {string}
 */
const reverseOnlyLetters = (s) => {
  let L = 0;
  let R = s.length - 1;
  let res = s.split('');
  while (L < R)
  {
    if (!res[L].match(/[a-zA-Z]/)) L++;
    else if (!res[R].match(/[a-zA-Z]/)) R--;
    else if (res[L].match(/[a-zA-Z]/) && res[R].match(/[a-zA-Z]/))
    {
      let tmp = res[L];
      res[L] = res[R];
      res[R] = tmp; 
      L++;
      R--;
    }
  }
  return res.join('');
};