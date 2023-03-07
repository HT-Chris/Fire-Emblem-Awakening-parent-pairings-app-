var topKFrequent = function(nums) {
    let sort = nums.sort((a,b)=> a-b)
    let outcome = 1
    let top = 1
    console.log(sort)
for(let i = 0; i < sort.length; i++ ){

if (sort[i] +1 === sort[i +1]){
    outcome += 1
    top = outcome
}else{ outcome =1}
// console.log(outcome)
}
return top  

}
let test = topKFrequent([9,1,4,7,3,-1,0,5,8,-1,6])

console.log(test)

/*

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Input: nums = [100,4,200,1,3,2]
Output: 4

*/