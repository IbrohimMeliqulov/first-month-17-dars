function reverse_word(str){
    let n=str.length
    let m=str.length/2
    let char=''
    for(let i=0;i<m;i++){
        char=str[i]
        str[i]=str[n-i-1]
        char=str[n-i-1]
    }
    alert(str)
}

let str="the sky is blue"
reverse_word(str)