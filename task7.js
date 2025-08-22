function formatPhoneNumber(arr){
    if(arr<10){
        return "10 talik qiymatli arraymas"
    }else{
        let first=arr.slice(0,3)
        let  joined=first.join('')
        let second=arr.splice(3,7)
        let result=''
        let count=0
        for(let i=0;i<second.length-4;i++){
                result+=second[i]
            count+=1
        }
        result+='-'
        let third=second.slice(3,8)
        for(let i=0;i<third.length;i++){
            result+=third[i]
        }
        return `${(joined)} ${result}`
    }
}


let arr=[1,2,3,4,5,6,7,8,9,0]
console.log(formatPhoneNumber(arr))