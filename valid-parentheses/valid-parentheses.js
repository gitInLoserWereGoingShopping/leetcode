/**
 * @param {string} input
 * @return {boolean}
 */
var isValid = function(input) {
  if (input === '') { return true; }
  let openings = [];
  let splitzies = input.split('');
  let counter1 = 0;
  let counter2 = 0;
  let counter3 = 0;
  let c1flag = true;
  let c2flag = true;
  let c3flag = true;
  
  for (let char of splitzies) {
    //open
    if (char === '(') {
      counter1++;
      c1flag = false;
      openings.push(char);
    }
    
    if (char === '{') {
      counter2++;
      c2flag = false;
      openings.push(char);
    }
    
    if (char === '[') {
      counter3++;
      c3flag = false;
      openings.push(char);
    }
    
    //close
    let lastOpen = openings[openings.length - 1];
    
    if (char === ')') {
      if (lastOpen !== '(') {
        return false;
      }
      openings.pop();
      counter1--;
      c1flag = true;
    }
    
    if (char === '}') {
      if (lastOpen !== '{') {
        return false;
      }
      openings.pop()
      counter2--;
      c2flag = true;
    }
    
    if (char === ']') {
      if (lastOpen !== '[') {
        return false;
      }
      openings.pop();
      counter3--;
      c3flag = true;
    }
  }
  
  if ((counter1 === 0 && counter2 === 0 && counter3 === 0) && (c1flag === true && c2flag === true && c3flag === true)) {
    return true;
  }
  
  return false;
};