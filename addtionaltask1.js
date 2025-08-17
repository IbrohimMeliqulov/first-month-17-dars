function arrayofMultiples(num,length,array){
    if(array.length===length){
        return array
    }
    array.push(num)
    return arrayofMultiples(length,array,num*2)
}

let num=Number(prompt("array uchun raqam kiriting: "))
let length=Number(prompt("uzunligi uchun raqam kiriting: "))
let massiv=[length]
alert(arrayofMultiples(num,length,massiv))
