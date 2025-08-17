function arrBetween(num1,num2,numbers){
    let massiv=[]
    for(let number of numbers){
        if (number>n1 && number<n2){
            massiv.push(number)
        }
    }
    alert(massiv)
    
}

n=Number(prompt("Arrayga nechta raqam kirgizmoqchisiz? "))
let arr=[n]
for(let i=0;i<n;i++){
    a=Number(prompt(">>>"))
    arr.push(a)
}

let n1=Number(prompt("Birinchi boshlanish kichik raqamni kirgizing:"))
let n2=Number(prompt("Ikkinchi oxirgi tugash raqamni kirgizing: "))
arrBetween(arr,n1,n2)