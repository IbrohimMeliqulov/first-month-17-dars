function removEntry(obj,str){
    for(let i in obj){
        if(i.toLowerCase()==str.toLowerCase()){
            delete obj[i]
        }
    }
    return obj
}




let obj={ piano: 300, tv: 100, skate: 50 }
console.log(removEntry(obj,"skate"))