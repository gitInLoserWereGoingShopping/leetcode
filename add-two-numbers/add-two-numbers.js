/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
const addTwoNumbers = (l1, l2) =>
{
  let nullNode = new ListNode();
  let tail = nullNode;
  let carry = 0;
  while (l1 || l2 || carry)
  {
    let val1 = l1?.val || 0;
    let val2 = l2?.val || 0;
    let val = val1 + val2 + carry;
    carry = val >= 10 ? 1 : 0;
    val = carry ? val % 10 : val;
    tail.next = new ListNode(val);
    tail = tail.next;
    l1 = l1 ? l1.next : null;
    l2 = l2 ? l2.next : null;
  }
  return nullNode.next;
};