function countTrue(arr){
    let result=arr.filter((value) =>value==true)
    return result.length
}



let arr=[true, false, false, true, false]
console.log(countTrue(arr))