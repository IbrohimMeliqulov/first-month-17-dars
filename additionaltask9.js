function reversibleIncluseiveList(n1,n2){
    let arr=[]
    for (let i=n2;i>n1;i--){
        arr.push(i)
    }
    arr.push(n1)
    alert(arr)
}


let n1=Number(prompt(" oxirgi tugash kichik Son kiriting "))
let n2=Number(prompt("Boshlang'ich katta son kiriting: "))
reversibleIncluseiveList(n1,n2)