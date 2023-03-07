var topKFrequent = function(strs) {
let map=new Map()

for (let s of strs){
    let al = s.split('').sort().join('')
    map[al] ? map[al].push(s) : map[al] = [s]
}
console.log(map)
return Object.values(map)


};


let test = topKFrequent(["eat","tea","tan","ate","nat","bat"])

console.log(test)

/*

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
*/