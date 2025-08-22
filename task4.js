function findPrimeNumber(arr){
    const result=arr.filter((number)=>number%2===1)
    return result[0]
}

let arr=[4, 12, 42, 9,12, 3]
console.log(findPrimeNumber(arr))