// let n=38527
// let max=n%10
// let raqam=0
// while(n){
//     parseInt(raqam=n%10)
//     if(raqam>max){
//         max=parseInt(raqam)
//     }
//     parseInt(n/=10)
// }
// console.log(max)


//to'liqmas
// let n=13
// let raqam
// while(n>0){
//     raqam=n/2
//     console.log(raqam)
// }


// let n=20
// let a=2
// let arr=[]
// while(a<=n){
//     let i=2
//     let tub=true
//     while(i<a){
//         if(a%i===0){
//             tub=false
//             break
//         }
//         i++
//     }
//     if(tub){
//         arr.push(a)
//     }
//     a++
// }
// console.log(arr)


let n=13
let m=''
while(n){
    let raqam=n%2
    n=parseInt(n/2)
    m+=raqam
}
let result=''
let h=String(m)
for(let i=h.length;i>=0;i--){
    result+=h[i]
}
console.log(result)







