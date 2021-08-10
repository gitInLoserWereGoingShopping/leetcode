/**
 * @param {number[]} nums
 * @return {number[][]}
  Given an array nums of distinct integers, return all the   possible permutations. You can return the answer in any order.

  

  Example 1:

  Input: nums = [1,2,3]
  Output: [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
  Example 2:

  Input: nums = [0,1]
  Output: [[0,1],[1,0]]
  Example 3:

  Input: nums = [1]
  Output: [[1]]
  

  Constraints:
  1 <= nums.length <= 6
  -10 <= nums[i] <= 10
  All the integers of nums are unique.
 */
const permute = (nums) => {
  let permutations = [];
  
  //dfs recursive helper
  const dfs = (permutations, arr, nums) => {
    //base case
    if(nums.length === 0) {
      permutations.push(arr);
      return;
    }
    
    let tmp1 = [];
    let tmp2 = [];
    
    //recursive case
    for (let i = 0; i < nums.length; i++) {
      tmp1 = Array.from(arr);
      tmp1.push(nums[i]);
      
      tmp2 = Array.from(nums);
      tmp2.splice(i, 1);
      
      dfs(permutations, tmp1, tmp2)
    }
    
  }
  
  //initialize recursion
  dfs(permutations, [], nums);
  return permutations;
};

/*
let nums1 = [1,2,3];
console.log([[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]], permute(nums1));

let nums2 = [0,1];
console.log([[0,1],[1,0]], permute(nums2));

let nums3 = [1];
console.log([[1]], permute(nums3));
*/