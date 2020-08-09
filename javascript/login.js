function valid_login(){
    var user_login=document.getElementById('username').value;
    var pwd_login=document.getElementById('password').value;
    var error=false;

    if(user_login==""){
        document.getElementById('user_login_error').innerHTML="**Please enter the username";
        error=true;
    }
    else if(user_login !="admin"){
        document.getElementById('login_error').innerHTML="Invalid Login Credetials/Login failed";
        error=true;

    }

    if(pwd_login==""){
        document.getElementById('user_password_login_error').innerHTML="**Please enter the password";
        error=true;
    }
    else if(pwd_login !="admin"){
        document.getElementById('login_error').innerHTML="Invalid Login Credetials,Login failed";
        error=true;
    }

        if(error){
            return false;
        }

}