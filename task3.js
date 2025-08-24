function average_result(employees){
    let count_hr=0
    let count_it=0
    let obj={}
    const count=employees.forEach(employee =>{
        if(employee.department=="IT"){
            count_it+=1
        }else{
            count_hr+=1
        }
    })
    let result=[
        {department:'IT',average:0},
        {department:"HR",average:0}]
    // console.log(count_hr)
    // console.log(count_it)
    let average_result_it=0
    let average_result_hr=0
    for(let key of employees){
        if(key.department=='IT'){
            average_result_it+=key.salary
        }else{
            average_result_hr+=key.salary
        }
    }
    let natija=parseInt(average_result_it/count_it)
    let natija1=parseInt(average_result_hr/count_hr)
    for(let key of result){
        if(key.department=="IT"){
            key.average=natija
        }else{
            key.average=natija1
        }
    }
    // console.log(result[1])
    if(result[0].average>result[1].average){
        return result[0]
    }else{
        return result[1]
    }
    

    
    
}



const employees = new Set([
  { name: "John", salary: 50000, department: "IT" },
  { name: "Jane", salary: 60000, department: "HR" },
  { name: "Bob", salary: 55000, department: "IT" },
  { name: "Sophie", salary: 75000, department: "HR" },
  { name: "Mike", salary: 65000, department: "IT" },
  { name: "Emily", salary: 80000, department: "HR" },
  { name: "David", salary: 70000, department: "IT" },
])

console.log(average_result(employees))