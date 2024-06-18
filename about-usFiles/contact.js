//for last contact submit button
var submit = document.querySelector("#contactSubmit");
function delete2() {
    var firstname = document.querySelector(".firstname");
    
    var secondname = document.querySelector(".lastname");
    var email = document.querySelector(".email");
    var textarea = document.querySelector('#textarea');
    var phone = document.querySelector('.mobileNumber');
    if (firstname.value.length == 0 || secondname.value.length == 0 || textarea.value.length == 0 || email.value.length == 0 || phone.value.length ==0) {
        window.alert("Empty fields!!please enter the value");
        
    }
    else {
        window.alert("Thank you! for the submission");
    }

}