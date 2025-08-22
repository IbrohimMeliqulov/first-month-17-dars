function minMax(arr){
    let min=2
    let max=0
    for(let i=0;i<arr.length;i++){
        if(max<arr[i]){
            max=arr[i]
        }
    }
    for(let i of arr){
        if(min>i){
            min=i
        }
    }
    return [min,max]

}


let arr=[1,2,3,4,5]
console.log(minMax(arr))