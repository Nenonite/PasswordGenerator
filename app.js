let input = document.querySelector(".in");
let img = document.querySelector(".samimg");
let btn = document.querySelector("button");
let number = document.querySelector(".number");
let password_length = 0;
number.value = 0;

number.onchange = function() {
    password_length = number.value;
    console.log(password_length)
}

function create_password() {
    let str = "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+<>:{}[]~-/?";

    let password = "";
    if(number.value == 0) {
        input.value = "Длина пароля = 0";
    }     
    else {
       for(let i = 0; i < password_length; i++) {
           let random_number = Math.floor(Math.random()*str.length);
           password += str[random_number]; 
       }
    }
    input.value = password;
}

btn.onclick = create_password;

function copy_password() {
    input.select();
    input.setSelectionRange(0, password_length);
    document.execCommand("copy");
}

img.onclick = copy_password;