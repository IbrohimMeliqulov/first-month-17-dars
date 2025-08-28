class Point{
    constructor(x,y){
        this.x=x
        this.y=y
    }
    static distance(p1,p2){
        const d=Math.sqrt((p2.x-p1.x)**2+(p2.y-p1.y)**2)
        return d
    }

}


let p1=new Point(5,5)
let p2=new Point(9,8)
console.log(Point.distance(p1,p2))