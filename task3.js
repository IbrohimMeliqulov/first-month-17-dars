class University{
    static departments=[]
    constructor(name){
        this.name=name
    }
    addDepartment(name){
        University.departments.push(name)
    }

    remove_departments(name){
        if(University.departments.includes(name)){
            let index=University.departments.indexOf(name)
            University.departments.splice(index,1)
        }else{
            return "Department not found"
        }
    }
    get all(){
        return University.departments
    }
}




const b1=new University("Management")

b1.addDepartment("Management")
b1.addDepartment("Finance")
b1.addDepartment("Mathematics")
b1.addDepartment("Quant Physics")

b1.remove_departments("Accounting")

console.log(University.departments)
