function search(numbers,n){
    let count=0
    for(number of numbers){
        if(number==n){
            count++
        }
    }
    if(count==1){
        alert(1)
    }else{
        alert(-1)
    }
}

let arr=[7,9,10,23,4,45]
n=Number(prompt("son kiriting:"))
search(arr,n)