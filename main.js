const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)

}
const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

var nameError = document.getElementById('name-error')
var emailError = document.getElementById('email-error')
var phoneError = document.getElementById('phone-error')
var companyNameError = document.getElementById('company-name-error')
var companyWebsiteError = document.getElementById('company-website-error')

function validateName(){
  var name = document.getElementById('nameInput').value;
  
  if (name.length == 0){
    nameError.innerHTML = 'O campo nome é obrigatório'
    return false
  }
  if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
    nameError.innerHTML = 'Digite seu sobrenome'
    return false
  }
  nameError.innerHTML = '<img src="/img/check-circle.svg">'
  return true
}

function emailValidate(){
  var email = document.getElementById('emailInput').value;

  if(email.length == 0){
    emailError.innerHTML = 'O campo email é obrigatório'
    return false
  }
  if(!email.match(/^[A-Za-z\._\-[0-9]*[@][A-Za-z]*[\.][a-z]{2,4}$/)){
    emailError.innerHTML = 'Digite um endereço de email válido'
    return false
  }
  emailError.innerHTML = '<img src="/img/check-circle.svg">'
  return true
}

function phoneValidate(){

  var phone = document.getElementById('phoneInput').value;
  
  if(phone.length == 0){
    phoneError.innerHTML = 'O campo telefone é obrigatório'
    return false;
  }
  if(phone.length < 11){
    phoneError.innerHTML = 'Digite um número de telefone válido'
    return false
  }
  phoneError.innerHTML = '<img src="/img/check-circle.svg">'
  return true
}

function websiteValidate(){
  var website = document.getElementById('websiteInput').value;

  if(website == 0){
    companyWebsiteError.innerHTML = 'O campo website precisa ser preenchido'
    return false
  }
  if(!website.match(/^[A-Za-z\._\-[0-9]*[\.][a-z]{2,4}$/)){
    companyWebsiteError.innerHTML = 'digite um site válido'
    return false
  }
  companyWebsiteError.innerHTML = '<img src="/img/check-circle.svg">'
}

/*const phoneNumberInput = document.getElementById('inputPhone')

  const phoneMask = (value) => {
    if (!value) return ""
    value = value.replace(/\D/g,'')
    value = value.replace(/(\d{2})(\d)/,"($1) $2")
    value = value.replace(/(\d)(\d{4})$/,"$1-$2")
    return value
  }

 // if (!(phoneNumberInput.length >= 10 && phoneNumber.length <= 11)) {};

  phoneNumberInput.addEventListener('keyup', (event) => {
    let input = event.target
    input.value = phoneMask(input.value)
  })
*/

/*
function validateEmail(email) {
  var re = /\S+@\S+\.\S+/;
  return re.test(email);
}

function validateSite() {
  
  const siteInput = document.getElementById('websiteInput')
  const siteValue = siteInput.value
  

  var reS = /\S+\.\S+/;
  //return reS.test(site);
}
*/


/*
function websiteHandle(){
  const websiteInput = document.getElementById('websiteInput');
  const errorMsg = document.getElementById('error-msg')
  const websiteValue = websiteInput.value;

  if (websiteValue.includes(".com")){
    errorMsg.textContent = "";
  }else{
    alert("digite um site válido")    
    //errorMsg.textContent = "Digite um endereço de site válido";
  }
}*/

/*
const formValidate = document.getElementById('hsForm')

if (formValidate){
  formValidate.addEventListener("submit", async (e) => {
        
    const inputList = document.querySelectorAll(".input-form-validate")
    console.log(inputList);

    for(let cont = 0; cont < inputList.length; cont++){

      const inputField = inputList[cont]
      console.log(inputField);

      const inputName = inputField.classList[0];
      console.log(inputName);

      var valueInputValidate = document.getElementsById(inputName).value

      if (valueInputValidate == ""){
        
        //block page refresh
        e.preventDefault();

        document.getElementById("error-msg").innerHTML = "<p style='color: #f00'>Necessário preencher todos os campos obrigatórios</p>"

        return;
      }

    }
  });
}
*/

