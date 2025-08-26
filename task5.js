function numInStr(arr){
    let result=[]
    for(let x of arr){
        const pattern=/[0-9]/g;
        if(x.match(pattern)){
            console.log(x)
            result.push(x)        
        }
    }
    return result
}


console.log(numInStr(["1a", "a", "2b", "b"]))