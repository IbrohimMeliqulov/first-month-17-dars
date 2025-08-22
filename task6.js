function returnVowel(arr){
    const vowels="aeuioAEUIO"
    let result=[]
    for(let i=0;i<arr.length;i++){
        let n=''
        let b=''
        n+=arr[i]
        for(let j=0;j<n.length;j++){
            let c=n[j]
            if(vowels.includes(c)){
                b+=c
            }
        }
        result.push(b)
    }
    console.log(result)
}

let arr=["Assalomu alaykum", "salom", "Najot ta'lim"]
console.log(returnVowel(arr))