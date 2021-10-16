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
const mergeTwoLists = (l1, l2) =>
{
    let nullNode = new ListNode();
    let tail = nullNode;
    while (l1 && l2)
    {
        if (l1.val <= l2.val)
        {
            tail.next = l1;
            l1 = l1.next;
        } else
        {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }
    l1 ? tail.next = l1 : tail.next = l2;
    return nullNode.next;
};
