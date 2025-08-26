function countAll(str){
    let obj={}
    let words=str.trim()
    let HARFLAR=0
    let RAQAMLAR=0
    for(let x of words){
        if(x>=0 && x<=9){
            // console.log(x)
            RAQAMLAR+=1
        }else{
            HARFLAR+=1
        }
    }
    obj['HARFLAR']=HARFLAR
    obj['RAQAMLAR']=RAQAMLAR
    return obj

}

console.log(countAll("HELLO WORLD1"))
