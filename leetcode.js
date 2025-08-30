var findWordsContaining = function(words, x) {
    let arr=[]
    for(let i=0;i<words.length;i++){
        if(words[i].includes(x)){
            arr.push(i)
        }
    }
    // console.log(arr)
    return arr
};







let words = ["abc","bcd","aaaa","cbc"]
let x = "a"
console.log(findWordsContaining(words,x))