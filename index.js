
var passsword = document.querySelector('#password');
var ActionEye = document.querySelector('i');

const ShowHidePassword =()=>{
    if(passsword.type =='password'){
        passsword.setAttribute('type','text');
    }
    else{
        passsword.setAttribute('type','password'); 
    }
    // if eye is desactive that classList.toggle permet de l'activer
    ActionEye.classList.toggle('fa-eye');
    // if eye is active alors classList.toggle permet de le desactiver
    ActionEye.classList.toggle('fa-eye-slash')

     
    
};

ActionEye.addEventListener('click',
    ShowHidePassword);
