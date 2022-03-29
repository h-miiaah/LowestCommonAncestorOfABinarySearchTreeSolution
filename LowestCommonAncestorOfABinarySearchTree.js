/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
 var lowestCommonAncestor = function(root, p, q) {
    const low = Math.min(p.val, q.val)
    const high = Math.max(p.val, q.val)
    let ancestor = null
    const aux = (node) => {
        if (!node) {
            return
          }
        if (node.val >= low && node.val <= high) {
            ancestor = node
          } else if (node.val <= low) {
            aux(node.right)
          } else {
            aux(node.left)
          }
      }
      aux(root)
      return ancestor
  };

  /**
   * First find the lowest common ancestor of p and q.
   * We then check if the lowest common ancestor is p or q.
   * If it’s p or q, we return the node.
   * 
   */