function uniqueArr(numbers){
    let numbers=Set(numbers)
    alert(numbers)
}


let n=Number(prompt("arrayga nechta son qo'shmoqchisiz? "))
let array=[n]
for(let i=0;i<n;i++){
    let a=Number(prompt(">>>"))
    array.push(a)
}
uniqueArr(array)
