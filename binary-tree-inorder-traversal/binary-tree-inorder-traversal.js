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
const inorderTraversal = (root) => {
  let arr = [];
  const _traverse = (node, arr) => {
    if (!node) return arr;
    _traverse(node.left, arr);
    arr.push(node.val);
    _traverse(node.right, arr);
  }
  _traverse(root, arr);
  return arr;
};
