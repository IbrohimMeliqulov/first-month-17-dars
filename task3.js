class Magic{
    constructor(){

    }
    replace(str){
        let  result=''
        for(let x of str){
            // console.log(x)
            if(x.toLowerCase()=='a'){
                x=x.replaceAll('a','b')
                result+=x
            }
            else{
                result+=x
            }
        }
        console.log(result)
    }
    length(str){
        return str.length
    }
    toUpperCase(data){
        let str=data.toLowerCase()
        // console.log(str)
        let result=''
        for(let i=0;i<str.length;i++){
            let number=str.charCodeAt(i)
            let m=String.fromCharCode(number-32)
            // console.log(m)
            result+=m
        }
        console.log(result)
    }
    repeat(data,n){
        let result=''
        for(let i of data){
            result+=i.repeat(n)
        }
        console.log(result)
    }
    count(data){
        let obj={}
        for(let i of data){
            if(i in obj){
                obj[i]+=1
            }else{
                obj[i]=1
            }
        }
        console.log(obj)
    }
}


m=new Magic()
m.replace("Salom")

m.length("hello world")

m.toUpperCase("heLLo")

m.repeat("Hello",2)

m.count("hello world")