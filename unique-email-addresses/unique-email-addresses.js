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
  if (emails.length >= 1 && emails.length <= 100) {
    let counter = 0;
    let validEmails = {};
    emails.forEach(email => {
      if (
        (email.length >= 1 && email.length <= 100) &&
        (email === email.toLowerCase()) &&
        (email.includes('.') && email.includes('@')) &&
        (email.indexOf('@') === email.lastIndexOf('@')) &&
        (email[0] !== '+')
      ) {
        //split left (local) and right (domain) of '@' in email
        let atIndex = email.indexOf('@');
        //set local name and remove '.' out of it
        let local = email.slice(0, atIndex).split('.').join('');
        let domain = email.slice(atIndex);
        if (local.length && domain.length) {
          if (local.includes('+')) {
            local = local.slice(0, local.indexOf('+'))
            let modifiedEmail = local + '@' + domain;
            if (!validEmails[modifiedEmail]) {
              validEmails[modifiedEmail] = true;
              counter++;
            }
          } else {
            let modifiedEmail = local + '@' + domain;
            if (!validEmails[modifiedEmail]) {
              validEmails[modifiedEmail] = true;
              counter++;
            }
          }
        }
      }
    })
    return counter;
  } else {
    return 0;
  }
};