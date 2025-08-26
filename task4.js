function checkout_tax(checkout){
    let count=0
    let tax=0
    for(let x of checkout){
        let q=x.qty
        let p=x.prc
        let total=p*q
        count+=total
        total=0
        if(x.taxable===true){
            let natija=x.prc
            tax=(natija/100)*6
        }
    }
    console.log(count+tax)
}









let checkout=([
  { desc: "kartoshka chiplari", prc: 2, qty: 2, taxable: false },
  { desc: "gazlangan suv", prc: 3, qty: 2, taxable: false },
  { desc: "qog'oz idishlar", prc: 5, qty: 1, taxable: true }
])
console.log(checkout_tax(checkout))