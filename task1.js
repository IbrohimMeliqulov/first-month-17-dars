function numberSplit(n){
    if(n>0){
        let number=parseInt(n/2)
        let arr=[]
        arr.push(number)
        arr.push(n-number)
        arr.sort()
        return arr
    }else{
        let number=parseInt(n/2)
        let arr=[]
        arr.push(number)
        arr.push(n-number)
        const result=arr.sort((a,b) => a-b )
        return result
    }
}


n=-9
console.log(numberSplit(n))