var topKFrequent = function(nums, k) {
    let arr = []
    arr.length = nums.length
    arr.fill(1)

    let product = 1
for (let i = 1; i < nums.length - 1; i++ ){
    product *= nums[i]
    arr[i +1 ] = product * nums[i]

}    
    console.log(arr)
   
};

let test = topKFrequent( [1,2,3,4])

console.log(test)
