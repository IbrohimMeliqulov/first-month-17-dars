let users=[]
fetch("https://682f107d746f8ca4a47fa71c.mockapi.io/products")
        .then(res=>res.json())
        .then(data=>{
            console.log(data.find(x=>x.firstname))
            data.forEach((element)=>{
                console.log(element)
            })
        })