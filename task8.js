function spelling(str){
    arr=[]
    let n=''
    for(let i=0;i<str.length;i++){
        n+=str[i]
        arr.push(n)
    }
    return arr
}



str="bee"
console.log(spelling(str))