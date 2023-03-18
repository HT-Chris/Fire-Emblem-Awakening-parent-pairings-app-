var productExceptSelf = function(nums) {

    let out = new Array(nums.length).fill(1)
    let zero = function(n){if(n === -0){ return 0} else{ return n}}
    
    let product =1
    for(let i = 1; i < nums.length -1; i++){
    product *= nums[i]
    out[i+1] *= product
    }
    console.log(out)
    product = 1
    out.map(n => zero(n))
    
    for( let i = nums.length -1; i >0; i--){
        product *= nums[i]
        out[i-1] *= product 
    }


return out.map(n => zero(n))
    };

let test = productExceptSelf([-1,1,0,-3,3])
    console.log(test)