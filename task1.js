function   str(str){
    let result=[]
    let words=str.split(' ')
    for(let i of words){
        result.push(i)
    }
    // console.log(result)
    let natija=''
    for(let key of result){
        // console.log(key)
        if(key.length>=3){
            // console.log(key[key.length-1])
            natija+=key[0]
            natija+=key.length
            natija+=key[key.length-1]
            natija+=' '
        }else{
            natija+=key
            natija+=' '
        }
    }
    console.log(natija)
    return natija
}




let matn = "Every developer likes to mix kubernetes and javascript";
console.log(str(matn))