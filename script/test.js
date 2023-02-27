var isAnagram = function(s, t) {
    s = s.split('').sort()
    t = t.split('').sort()
    console.log(s)
    console.log(t)
    for(let i = 0; i < s.length; i++){
        if( s[i] !=t[i] ){
            return false
        }
    }
return true
};

let test = isAnagram('anagram', 'nagaram')


console.log(test)