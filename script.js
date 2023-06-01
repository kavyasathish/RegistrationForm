
function formValidate(person, chk_box_val){

    var name = person.name;
    var email = person.email;
    var country = person.country;
    var phone = person.phone;
    var password = person.password;
    var checked = chk_box_val;

   c//onsole.log(person, checked.checked)

    var regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    var regPhone = /^\d{10}$/;
    var regName = /\d+$/g;
    var checkbox = document.getElementById('agree');

    if(name == ""){
        alert("Please enter your name" + person.name);
        document.getElementById('name').focus();
        return false;
    }
    if(email == "" || !regEmail.test(email)){
        alert("Please enter a valid e-mail address");
        document.getElementById('email').focus();
        return false;
    } 
    if(country == ""){
        alert("Please enter the country name");
        document.getElementById('country').focus();
        return false;
    }
    if(phone == "" || !regPhone.test(phone)){
        alert("Please enter valid phone number.");
        document.getElementById('phone').focus();
        return false;
    }
    if(password == "" ){
        alert("Please enter your password.");
        document.getElementById('password').focus();
        return false;

    }
    if(password.length < 6 ){
        alert("Password length shoud be at least 6 character long");
        document.getElementById('password').focus();
        return false;
    }
    if(checked.checked==false){
        alert("Please check the terms and conditions");
        document.getElementById('agree').focus();
        return false;
    }
    return true;
    

    
}