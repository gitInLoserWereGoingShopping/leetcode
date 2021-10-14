/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} preorder
 * @return {TreeNode}
 */
const addNode = (node, newNode) =>
{
  while (node)
  {
    if (newNode.val < node.val)
    {
      if (node.left) node = node.left;
      else
      {
        node.left = newNode;
        break;
      } 
    }
    else
    {
      if (node.right) node = node.right;
      else
      {
        node.right = newNode;
        break;
      }
    } 
  }
}

const bstFromPreorder = (preorder) =>
{
  let root = new TreeNode(preorder[0]);
  for (let i = 1; i < preorder.length; i++)
  {
    let newNode = new TreeNode(preorder[i]);
    if (newNode.val < root.val)
    {
      if (!root.left)
      {
        root.left = newNode;
        continue;
      }
      addNode(root.left, newNode);
    }
    else
    {
      if (!root.right)
      {
        root.right = newNode;
        continue;
      }
      addNode(root.right, newNode);
    }
  }
  return root;
};