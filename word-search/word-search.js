/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}

  look through grid
  if first letter of word is found, start dfs
  dfs ran on the cell where first letter is matched

  O(n) TC
  O(n) SC
*/
const dfs = (board, i, j, count, word) => {
  if (count === word.length) {
    return true
  }
  if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] !== word[count]) {
    return false
  }
  let tmp = board[i][j];
  board[i][j] = ' ';
  let isFound =
    dfs(board, i + 1, j, count + 1, word) ||
    dfs(board, i - 1, j, count + 1, word) ||
    dfs(board, i, j + 1, count + 1, word) ||
    dfs(board, i, j - 1, count + 1, word);
  board[i][j] = tmp;
  return isFound;
}

const exist = (board, word) => {
  for (let i = 0; i < board.length; i++) {
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === word[0] && dfs(board, i, j, 0, word)) {
        return true
      }
    }
  }
  return false
}