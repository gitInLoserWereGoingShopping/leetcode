/**
 * @param {string[]} emails
 * @return {number}
 
 O: number - valid emails
 I: array of email address strings
 C: ignore '.' in local (left of @) name
    if there's a '+' in local name, only use to the left of +
    domain (right of @) name with more than one '.' are invalid
 E: N/A
 
*/
const numUniqueEmails = (emails) => {
  let counter = 0;
  let validEmails = {};
  emails.forEach(email => {
    let atIndex = email.indexOf('@');
    let local = email.slice(0, atIndex).split('.').join('');
    let domain = email.slice(atIndex);
    if (local.includes('+')) {
      local = local.slice(0, local.indexOf('+'))
    }
    let modifiedEmail = local + '@' + domain;
    if (!validEmails[modifiedEmail]) {
      validEmails[modifiedEmail] = true;
      counter++;
    }
  })
  return counter;
};
