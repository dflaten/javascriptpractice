/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 * 
 * Description: Determine which node has the biggest 
 * (or one of the biggest if there are multiple of 
 * the same size.) paths in the tree.
 * 
 * A "diamater" is a path in the binary tree which is
 * a connection of edges that starts at a node and ends 
 * at a node. It can start at the bottom lead back up to
 * a common node (not necessarily the root) and theen back
 * down the other side of the common node to an ending node
 * in the tree.
 * 
 * 
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var diameterOfBinaryTree = function(root) {
    //base case
    if (root == null) {
        return 0;
    } else {
        // Determine the biggest diameter in the left node.
        return Math.max(diameterOfBinaryTree(root.left), 
                        // Determinme the biggest diamater in the right node
                        Math.max(diameterOfBinaryTree(root.right), 
                           // Determine the diamater of the current note.
                           // This way we will check all nodes' diameters
                           // and the max function will return the largest.
                           determineHeight(root.left) + determineHeight(root.right)));
    }
 };

 function determineHeight(current) {
    if (current == null) {
        return 0;
    } else {
        return 1 + Math.max(determineHeight(current.left), 
                            determineHeight(current.right));
    }
 }