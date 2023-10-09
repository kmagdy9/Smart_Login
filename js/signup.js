//variables

var userNameInput = document.getElementById("userName");
var userEmailInput = document.getElementById("userEmail");
var userPasswordInput = document.getElementById("userPassword");
var allInputsAlert = document.getElementById("inputsMessage");
var emailAlert = document.getElementById("emailMessage");
var successAlert = document.getElementById("successMessage");

var userContainer = [];

if (localStorage.getItem("users") != null) {
  userContainer = JSON.parse(localStorage.getItem("users"));
}

function addUser() {

  if (validation() && validationEmail() && validationName() && validationPassword() && validateEmailRepeted()) {
    var user = {
      name: userNameInput.value,
      email: userEmailInput.value,
      password: userPasswordInput.value,
    };
    userContainer.push(user);

          localStorage.setItem("users", JSON.stringify(userContainer));
  
        
  
          allInputsAlert.classList.add("d-none");
          emailAlert.classList.add("d-none");
          successAlert.classList.remove("d-none");
          clearForm();
  }else{
    console.log("no");
  }

 
}
function validation(){
    if (
                userNameInput.value == "" &&
                userEmailInput.value == "" &&
                userPasswordInput.value == ""
              ) {
                allInputsAlert.classList.remove("d-none");
                emailAlert.classList.add("d-none");
                successAlert.classList.add("d-none");
                return false ;
              }else{
                allInputsAlert.classList.add("d-none");
                return true;
              }
}

function validateEmailRepeted() {
    if (userContainer.length > 0) {
        for (var i = 0; i < userContainer.length; i++) {
          if (userContainer[i].email.includes(userEmailInput.value) == true) {
            allInputsAlert.classList.add("d-none");
            emailAlert.classList.remove("d-none");
            successAlert.classList.add("d-none");
            return false ;
            
            
          }else {
            return true
          }
        }   
    }else{
      return true ;
    }
  }
  
function validationName() {

   

  var alertMessage = document.getElementById("messageName");

  var text = userNameInput.value;

  var regexName = /^[A-Z][a-zA-Z]{2,8} [A-Z][a-zA-Z]{2,8}$/;

  if (regexName.test(text) == true) {
    userNameInput.classList.remove("is-invalid");
    userNameInput.classList.add("is-valid");
    alertMessage.classList.add("d-none");
    return true;
  } else {
    userNameInput.classList.remove("is-valid");
    userNameInput.classList.add("is-invalid");
    alertMessage.classList.remove("d-none");
    return false;
  }
}

function validationEmail() {
   
  var alertMessage = document.getElementById("messageEmail");
  var text = userEmailInput.value;

  var regexMail =
    /(?:[a-z0-9!#$%&'*+=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

  if (regexMail.test(text) == true) {
    userEmailInput.classList.remove("is-invalid");
    userEmailInput.classList.add("is-valid");
    alertMessage.classList.add("d-none");
   
    return true;
  } else {
    userEmailInput.classList.remove("is-valid");
    userEmailInput.classList.add("is-invalid");
    alertMessage.classList.remove("d-none");
   
    return false;
  }
}

function validationPassword() {
   

  var alertMessage = document.getElementById("messagePassword");
  var text = userPasswordInput.value;

  var regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (regexPassword.test(text) == true) {
    userPasswordInput.classList.remove("is-invalid");
    userPasswordInput.classList.add("is-valid");
    alertMessage.classList.add("d-none");
   
    return true;
  } else {
    userPasswordInput.classList.remove("is-valid");
    userPasswordInput.classList.add("is-invalid");
    alertMessage.classList.remove("d-none");
   ;

    return false;
  }
}

function signIn() {
  window.location = "index.html";
}

function clearForm() {
  userNameInput.value = "";
  userEmailInput.value = "";
  userPasswordInput.value = "";
}
