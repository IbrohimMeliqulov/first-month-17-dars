function squareNumber(n){
    let result=''
    let arr=[]
    while(n){
        let number=n%10
        // console.log(number)
        arr.push(number**2)
        n=parseInt(n/10)
    }
    // console.log(arr)
    for(let i=arr.length-1;i>=0;i--){
        result+=String(arr[i])
    }
    return Number(result)
}



n=3221
console.log(squareNumber(n))