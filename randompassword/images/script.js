const passwordbox=document.getElementById("password-box");
const length=12;
const uppercase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowecase="abcdefghijklmnopqrstuvwxyz";
const number="0123456789";
const symbols="!@#$%^&()_|?/*-";

let allnum=uppercase+lowecase+number+symbols;


function createpassword(){
    let password="";
    password += uppercase[Math.floor(Math.random()*uppercase.length)];
    password += lowecase[Math.floor(Math.random()*lowecase.length)];
    password += number[Math.floor(Math.random()*number.length)];
    password += symbols[Math.floor(Math.random()*symbols.length)];

    while(length>password.length)
    {
        password += allnum[Math.floor(Math.random()*allnum.length)];
    }
    passwordbox.value=password;
}

function copypass(){
    passwordbox.select();
    document.execCommand("copy");

}