function doubleFactorial(n){
    if(n===1){
        return sum
    }
    sum=sum*n
    return doubleFactorial(n-2)

}



n=Number(prompt("Factorial uchun son kiriting: "))
let sum=1
if(n%2===0){
    alert(doubleFactorial(n-1,sum))
}else{
    alert(doubleFactorial(n,sum))
}