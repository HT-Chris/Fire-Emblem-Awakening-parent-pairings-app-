var mergeTwoLists = function(nums,k) {
  
let out = new Array(nums.length).fill(1)

let product =1
for(let i = 1; i < nums.length -1; i++){
product *= nums[i]
out[i+1] = product
}
product = 1

for( let i = nums.length -1; i >0; i--){
    product *= nums[i]
    out[i-1] *= product 
}
return out
    
}

let test = mergeTwoLists([2,7,11,15],  9)

console.log(test)

/*

list1 = [1,2,4], list2 = [1,3,4]

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [100,4,200,1,3,2]
Output: 4

Input: prices = [7,1,5,3,6,4]
Output: 5

*/