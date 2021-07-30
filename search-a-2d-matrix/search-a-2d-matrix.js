/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
const searchMatrix = function(matrix, target) {
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i]
    if (row[0] <= target) {
      if (target <= row[row.length - 1]) {
        return row.includes(target) 
      }
    }
  }
  return false;
};