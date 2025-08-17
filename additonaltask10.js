function factorize(number){
    let array=[]
    for(let i=0;i<number;i++){
        if(number%i===0){
            array.push(i)
        }
    }
    array.push(number)
    alert(array)
}


let number=Number(prompt("Son kiriting: "))
factorize(number)