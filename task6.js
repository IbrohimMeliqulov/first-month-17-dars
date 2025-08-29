function ishkuni(d){
    let data=new Date()
    let kunlar=0
    while(kunlar<d){
        data.setDate(data.getDate()+1)
        let kun=data.getDay()
        // console.log(kun)
        if(kun!==0 && kun !==6){
            kunlar++
        }
    }
    let year=data.getFullYear()
    let month=data.getMonth()+1
    let date=data.getDate()
    return `${year} yil ${month} oy ${date} kun`
}



let d=60
console.log(ishkuni(d))