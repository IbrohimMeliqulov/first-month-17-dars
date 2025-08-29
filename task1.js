class Product{
    static count_prodcut=0
    static total_price=0
    constructor(id,name,price,warrantyPeriod){
        this.id=id
        this.name=name
        this.price=price
        this.warrantyPeriod=warrantyPeriod
        Product.count_prodcut+=1
        Product.total_price+=this.price
    }
    static totalPrice(){
        return Product.total_price
    }
}




const date=new Date()
class CareProduct extends Product{
    constructor(id,name,price,warrantyPeriod){
        super(id,name,price,warrantyPeriod)
    }
    
    
    total_price(){
        let warrant=Number(this.warrantyPeriod)
        let date1=date.getDate()
        if(date1-warrant===5){
            Product.total_price-=this.price
            this.price=this.price*0.9
            Product.total_price+=this.price 
        }else if(date1-warrant===4){
            Product.total_price-=this.price
            this.price=this.price*0.8
            Product.total_price+=this.price 
        }else if(date1-warrant===3){
            Product.total_price-=this.price
            this.price=this.price*0.7
            Product.total_price+=this.price 
        }else if(date1-warrant===2){
            Product.total_price-=this.price
            this.price=this.price*0.6
            Product.total_price+=this.price 
        }else if(date1-warrant===1){
            Product.total_price-=this.price
            this.price=this.price*0.5
            Product.total_price+=this.price 
        }
        
    }
}




const product=new Product(1,"kartoshka",14500,'31')
const product1=new Product(2,"olma",2500,'30')


const p1=new CareProduct(3,"olma",15000,'30')
const p2=new CareProduct(4,"Sut",35000,'30')
p1.total_price()
p2.total_price()
console.log(Product.totalPrice())
