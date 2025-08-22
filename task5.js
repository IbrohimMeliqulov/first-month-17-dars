function func(arr){
    let number=arr[0]
    let n=arr[1]
    let count=0
    let natija=number*n
    let bir=true
    while(bir){
        if(count==natija){
            bir=false
        }else{
            count+=number
        }
    }
    return count
}


let arr=[3,4]
console.log(func(arr))