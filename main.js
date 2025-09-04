// const users=[
//     {
//         firstName:"Ahmad",
//         lastName: "Aliyev",
//         email: "ahmad@email.com",
//         password: "123456"
//     },
//     {
//         firstName: "Madina",
//         lastName: "Karimova",
//         email: "madina@email.com",
//         password: "password"
//     },
//     {
//         firstName: "Bobur",
//         lastName: "Rahimov",
//         email: "bobur@email.com",
//         password: "qwerty"
//     }
// ]


function showLoading(button) {
    button.innerHTML = 'Loading...';
    button.disabled = true;
}

function hideLoading(button, originalText) {
    button.innerHTML = originalText;
    button.disabled = false;
}

function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email)
}

function validateName(name){
    return name.length >= 2 && /^[a-zA-Z\s]+$/.test(name)
}
function validatePassword(password){
    return password.length >= 6
}
///RegistrationForm
document.getElementById('firstName').addEventListener('input',function(){
    const firstName=this.value
    const errorDiv=document.getElementById('firstNameError')

    if(!validateName(firstName)){
        this.classList.add('error')   
        errorDiv.textContent="Ism kamida 2 ta harf bo'lishi kerak"
        errorDiv.style.display='block'
    }else{
        this.classList.remove('error')
        errorDiv.style.display='none'
    }
})

document.getElementById('email').addEventListener('input',function(){
    const email=this.value
    const errorDiv1=document.getElementById("emailError")

    if(!validateEmail(email)){
        this.classList.add('error')
        errorDiv1.textContent="Email no'tog'ri kiritildi"
        errorDiv1.style.display='block'
    }else{
        this.classList.remove('error')
        errorDiv1.style.display='none'
    }
})

document.getElementById("password").addEventListener('input',function(){
    const password=this.value
    const errorDiv2=document.getElementById('passwordError')

    if(!validatePassword(password)){
        this.classList.add('error')
        errorDiv2.textContent="Password lengthda xatolik"
        errorDiv2.style.display='block'
    }else{
        this.classList.remove('error')
        errorDiv2.style.display='none'
    }
})


const form=document.getElementById('signupForm')
if(form){
    form.addEventListener('submit',(e)=>{
    e.preventDefault()

    const firstName=document.getElementById('firstName').value.trim()
    const lastName=document.getElementById("lastName").value.trim()
    const email=document.getElementById('email').value.trim()
    const password=document.getElementById('password').value.trim()
    const confirmation=document.getElementById("confirmation").value
    const errorDiv3=document.getElementById("confirmationError")
    

    if(!validateName(firstName) || !validateName(lastName)||
    !validateEmail(email) || !validatePassword(password)){
        alert("Formada xatolik bor!") 
        return  
    } 

    // const uxshash=users.find(x=>x.email===email)

    // if(uxshash){
    //     alert("Bu email bilan allaqachon ro'yxatdan o'tilgan ")
    //     return;
    }
    if(password!==confirmation){
        alert("Password mos emas")
        errorDiv3.textContent='parollar mos emas'
        errorDiv3.style.display='block'
        return
    }
    // users.push({firstName,lastName,email,password})
    fetch('https://682f107d746f8ca4a47fa71c.mockapi.io/products',{
        method:"POST",
        headers:{
            'Content-Type':'application/json'
        },
        body:JSON.stringify({
            firstname:firstName,
            lastname:lastName,
            email:email,
            password:password
        })
    }).then(res=>{
        return res.json()
    }).then(data=>alert("SUCCESS"))
    .catch(error=>alert(error))




})
}




//loginForm
const login=document.getElementById("loginForm")
if(login){
    login.addEventListener('submit',(e)=>{
        e.preventDefault()
    
    const loginEmail=document.getElementById("loginEmail").value.trim()
    const loginPassword=document.getElementById('loginPassword').value.trim()

    if(!validateEmail(loginEmail) || !validatePassword(loginPassword)){
        alert("Formada ma'lumot noto'g'ri kiritdingiz")
        return 
    }
    let count=0
    fetch("https://682f107d746f8ca4a47fa71c.mockapi.io/products")
        .then(res=>res.json())
        .then(data=>{
            // console.log(data)
            data.forEach((element)=>{
                if(element.email===loginEmail){
                    count+=1
                }else if(element.password===loginPassword){
                    count+=1
                }
            })   
        })
        if(count===2){
            alert("SUCCESS")
        }else{
            alert("PROBLEM")
        }

})}



