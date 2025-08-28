function calculateWorkingHours(starting_point,ending_point){
    let first=starting_point.split(':')
    // console.log(first)
    let second=ending_point.split(':')
    // console.log(second[0])
    if(Number(second[0])>Number(first[0])){
        let natija=Number(second[0])-Number(first[0])
        let natija1=Number(second[1])-Number(first[1])
        return `Ish vaqti:${natija} soat ${natija1} daqiqa`
    }else{
        return "Xato: tugash vaqti boshlanish vaqtidan oldin bo'lishi mumkin emas"
    }

}



let starting="10:00"
let ending="17:30"
console.log(calculateWorkingHours(starting,ending))
