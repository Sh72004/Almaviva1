
// go to website
function one(){
var url = 'https://egy.almaviva-visa.it/appointment';
window.location.href = url;
}

function log(){
var text = 'Sign in to your account';
var pageSource = document.documentElement.innerHTML;
if (pageSource.includes(text)) {
        two();
    } else {
        check();
    }
}

// login
function two(){
var inputField1 = document.getElementById('username');
var inputField2 = document.getElementById('password');
inputField1.value = "jarifox482@etopys.com";
inputField2.value = "Test@321";
var button = document.getElementById('kc-login');
button.click();
}

// book
function three(){

}

