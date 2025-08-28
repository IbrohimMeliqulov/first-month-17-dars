class Product{
    static count_prodcut=0
    static total_price=0
    constructor(id,name,price){
        this.id=id
        this.name=name
        this.price=price
        Product.count_prodcut+=1
        Product.total_price+=this.price
    }
    static totalPrice(){
        return Product.total_price
    }
}


const product=new Product(1,"kartoshka",14500)
const product1=new Product(2,"olma",2500)
console.log(Product.totalPrice())