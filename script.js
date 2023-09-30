console.log("Welcome To Food Mania");

const wrapper = document.getElementById('wrapper');
const registerlink = document.getElementById('register-link');
const loginlink = document.getElementById('login-link');
console.log(wrapper);
console.log(registerlink);
console.log(loginlink);
if(registerlink){
    registerlink.addEventListener("click",()=>{
        wrapper.classList.add("active");
    });
}
if(loginlink){
    loginlink.addEventListener("click",()=>{
        wrapper.classList.remove("active");
    });
}
//index liked styling
function Toggle(id){
    console.log(id);
    var element =document.getElementById(id);
    if(element.style.color== 'red'){
        element.style.color = 'rgb(5, 247, 5)';
        
    }
    
    else {
        element.style.color = 'red';
       
    }
}