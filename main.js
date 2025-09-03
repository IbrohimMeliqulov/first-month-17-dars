const users=[
    {username:"begzodbek",email:"begzodbek@gmail.com",password:"bibibi28"},
    {username:"alisher",email:"alisher@gmail.com",password:"alisher25"},
    {username:"malika145",email:"malika2005@gmail.com",password:"malika123"}
]




let count=users.length
const form=document.getElementById("form")
const matn=document.getElementById("matn")


form.addEventListener("submit" ,(e)=>{
    e.preventDefault()
    const username=document.getElementById("username").value.trim()
    const email=document.getElementById("email").value.trim()
    const password=document.getElementById("password").value
    const confirmation=document.getElementById("confirmation").value


    if(password!==confirmation){
        matn.textContent ="Parollar mos emas";
        return ;
    }

    let newUser={
        username:username,
        email:email,
        password:password,
    }
    users.push(newUser)
    // console.log(users)
    matn.textContent ="Ro'yxatdan muvafaqiyatli o'tdingiz"
    form.reset()
})





const login=document.getElementById("login")
const text=document.getElementById("matn")

if(login){
    
    login.addEventListener("submit",(e)=>{
    e.preventDefault()

    const user=document.getElementById("login_username").value.trim()
    const pass=document.getElementById("login_password").value


    const finding_user=users.find(x=>x.username===user && x.password===pass)
    if(finding_user){
        text.textContent ="You entered your login successfully"
        login.reset()
    }else{
        text.textContent ="not correct username or password"
    }
})
}