//createOne
//createMany
//updateOne
//updateMany
//findAll
//findOne
//deleteOne
//deleteMany




//grade
//name
//age

class MySQL{
  constructor(){
    this.obj=[]
  }

  createOne(records){
    this.obj.push(records)
    // console.log(this.obj)
  }
  createMany(arr){
    if(!Array.isArray(arr)){
      return "Kiritilgan ma'lumotlar massiv shaklida kelmagan"
    }else{
      this.obj.push(... arr)
      return "Ma'lumotlar muvaffaqiyatli qo'shildi"
    }
  }
  updateOne(name,updates){
    const person=this.findOne(name)
    if(person){
      Object.assign(person,updates)
      console.log("O'zgartirish kirtildi")
    }else{
      console.log("not found")
    }
  }
  updateMany(){

  }
  findAll(){
    return this.obj
  }
  findOne(name){
    for(let x of this.obj){
      if(x && x.name===name){
        return x
      }
    }
    return 'not found'
  }
  deleteOne(name){
    let length=this.obj.length
    const user=this.findOne(name)
    this.obj=this.obj.filter(x=>x.name!==user)
    if(this.obj.length<length){
      console.log("User o'chirildi")
    }else{
      console.log("user topilmadi")
    }
  }
  deleteMany(arr){
    let length=this.obj
    this.obj=this.obj.filter(x => x.name!==arr)
    if(this.obj.length<length){
      console.log("users o'chirildi")
    }else{
      console.log("Noto'g'ri ma'lumot kirgizilgan")
    }
  }

}



person=new MySQL()
person.createOne({grade:3,name:"Ali",age:25})
person.createOne({grade:2,name:"Ibrohim",age:21})
person.createOne({grade:1,name:"Nozima",age:20})
person.createOne({grade:4,name:"Lola",age:23})
person.createOne({grade:3,name:"Po'lat",age:22})


let users=[
  {grade:1,name:"Ahad",age:20},
  {grade:2,name:"Olim",age:23},
  {grade:3,name:"Humoyun",age:29},
  {grade:4,name:"Ronald",age:22}
]
person.createMany(users)


person.updateOne("Ali",{grade:44, age:26})

// person.updateMany()


let result=person.findOne("Ahad")
console.log(result)

person.deleteOne("Ibrohim")
person.deleteMany(["Ahad,Olim"])