class University{
    static departments=[]
    constructor(name){
        this.name=name
        University.departments.push(this.name)
    }
    remove_departments(){
        if(University.departments.includes(this.name)){
            let index=University.departments.indexOf(this.name)
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
const b2=new University("Accounting")
const b3=new University("Finance")
const b4=new University("Quant Physics")
const b5=new University("Mathematics")
b1.remove_departments()
b3.remove_departments()
console.log(University.departments)
