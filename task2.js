function average_result(students){
    // const result=students.forEach(element => {
        // console.log(element)
        // console.log(element.scores)
    // });
    let arr=[]
    for(let key of students){
        let obj={}
        obj['name']=key.name
        let sum=0
        for(let i in key.scores){
            // console.log(key.scores[i])
            sum+=key.scores[i]
        }
        obj['average']=parseInt(sum/3)
        arr.push(obj)
    }
    const result=arr.reduce((max,current)=>{
        if(current.average>max.average){
            return current
        }else{
            return max
        }
    })
    return result
    
}




const students = new Set([
  { name: "Alice", scores: [90, 85, 92] },
  { name: "Bob", scores: [75, 80, 85] },
  { name: "Charlie", scores: [90, 95, 85] },
  { name: "Jack", scores: [100, 100, 100] }
]);
console.log(average_result(students))