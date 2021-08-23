/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
class Node {
  constructor(value) {
    this.value = value,
    this.left = null,
    this.right = null
  }
}
const inorderTraversal = (root) => {
  let arr = [];
  const _traverse = (node, arr) => {
    if (!node || node.value === null) return arr;
    if (node.left) _traverse(node.left, arr);
    arr.push(node.val)
    if (node.right) _traverse(node.right, arr);
  }
  _traverse(root, arr);
  return arr;
};