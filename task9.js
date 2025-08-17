function check(numbers,n){
    let trust=0
    for(number of numbers){
        if (number==n){
            trust+=1
        }
    }
    if(trust==1){
        alert("True")
    }else{
        alert("False")
    }
}


let arr=[4,6,5,9,10,56,9,7,1]
n=Number(prompt("Enter a number: "))
check(arr,n)