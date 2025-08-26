var similarPairs = function(words) {
    let obj={}
    for(let x of words){
        let set=new Set(x)

        let word=Array.from(set).sort().join('')
        if(word in obj){
            obj[word]+=1
        }else{
            obj[word]=1
        }
    }
    let count=0
    for(let key in obj){
        if(obj[key]>1){
            count+=(obj[key]*(obj[key]-1))/2
        }
    }
    return count

};