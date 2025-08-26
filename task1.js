let obj={
    1:"Doing a homework",
    2:"Running every morning",
    3:"Learning some preferable DSA",
    4:"Going to the center",
    5:"Going to university",
    6:"Improving soft skills"
}


function addTask(task){
    let keys=Object.keys(obj)
    let number=Number(keys.length+1)
    obj[number]=task
}

function removeTask(id){
    if(obj.hasOwnProperty(id)){
        delete obj[id]
    }else{
        return "Task not found"
    }
}


function printTasks(){
    return obj
}





addTask("Jumping on the street")
// console.log(obj)
removeTask(5)
console.log(printTasks())