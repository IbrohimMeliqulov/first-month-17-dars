class Box{
    constructor(length,width,height){
        this.length=length
        this.width=width
        this.height=height
    }
    getVolume(){
        console.log(this.length*this.width*this.height)
        boxes.push(this.length*this.width*this.height)
    }


}

function totalVolume(boxes){
    let result=0
    for(let i of boxes){
        // console.log(i)
        result+=i
    }
    return result
}




let boxes=[]
b1=new Box(45,78,65)
b1.getVolume()

b2=new Box(74,65,25)
b2.getVolume()


console.log(totalVolume(boxes))
