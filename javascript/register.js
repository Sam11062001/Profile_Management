function validation()
{   
    //obtaining the values from the form
    var first_name=document.getElementById('f_name').value;
    var last_name=document.getElementById('l_name').value;
    var emails=document.getElementById('email').value;
    var user=document.getElementById('username').value;
    var pwd=document.getElementById('password').value;
    var confirm_pwd=document.getElementById('c_password').value;
    var b_date=document.getElementById('birthdate').value;
    var nick=document.getElementById('nick_name').value;
    var mobile=document.getElementById('mobile_number');
    var error=false;


    //validation of the first name in the form
    if(first_name==""){
        document.getElementById('first_name_error').innerHTML="**Please enter the first name";
        error = true;
    }
   

     else if(!isNaN(first_name)){
        document.getElementById('first_name_error').innerHTML="**First Name cannot contain the numbers";
        error = true;   
    }
    
     else if((first_name.length <=2) || (first_name.length>20) ){
        document.getElementById('first_name_error').innerHTML="**Length of the firstname should be in between 2 to 20";
        error = true;
    }
    else{
        document.getElementById('first_name_error').innerHTML="";

    }   

    //validation of the last name in the form
    if(last_name==" "){
        document.getElementById('last_name_error').innerHTML="**Please enter the last name";
        error = true;
    }
    else if(!isNaN(last_name)){
        document.getElementById('last_name_error').innerHTML="**Last Name cannot contain the numbers";
        error = true;   
    }
   else if((last_name.length <=2) || (last_name.length>20) ){
        document.getElementById('last_name_error').innerHTML="**Length of the last name should be in between 2 to 20";
        error = true;
    }
     else{
        document.getElementById('last_name_error').innerHTML="";

    }   


    //validation of the email in the form
    if(emails==""){
        document.getElementById('email_error').innerHTML="**Please enter the email address";
        error = true;
    }
   else if(emails.indexOf('@')<=0){
        document.getElementById('email_error').innerHTML="**Please enter the valid email address";
        error = true;
    }
    else{
        document.getElementById('email_error').innerHTML="";

    }   


    //validation of the username in the form
    if(user==""){
        document.getElementById('username_error').innerHTML="**Please enter the user name for login credentials in data hut";
        error = true;
    }
  else if((user.length <=2) || (user.length>20) ){
        document.getElementById('username_error').innerHTML="**Length of the username should be in between 2 to 20";
        error = true;
    }
    else{
        document.getElementById('username_error').innerHTML="";

    }   



    //validation of the password
    if(pwd==""){
        document.getElementById('password_error').innerHTML="**Please enter the password";
        error = true;
    }
    
    else if((pwd.length <=2) || (pwd.length>20) ){
        document.getElementById('password_error').innerHTML="**Length of the password should be in between 2 to 20";
        error = true;
    }
    else{
        document.getElementById('password_error').innerHTML="";

    }   

    if(pwd!=confirm_pwd){
        document.getElementById('confirm_password_error').innerHTML="**Both password do not match";
        error = true;
    }
    else{
        document.getElementById('confirm_password_error').innerHTML="";

    }   
    



    //validation of the birthdate
    if(b_date==""){
        document.getElementById('birthdate_error').innerHTML="**Please enter your birthdate";
        error = true;
    }
    else{
        document.getElementById('birthdate_error').innerHTML="";

    }   

    //validation of the nick name
    if(nick==""){
        document.getElementById('nick_error').innerHTML="**Please enter the nick name";
        error = true;
    }
    else if(!isNaN(nick)){
        document.getElementById('nick_error').innerHTML="**Nick Name cannot contain the numbers";
        error = true;   
    }
    
    else if((nick.length <=2) || (nick.length>20) ){
        document.getElementById('nick_error').innerHTML="**Length of the Nick should be in between 2 to 20";
        error = true;
    }
    else{
        document.getElementById('nick_error').innerHTML="";

    }   
   

    //validation of the mobile number
    var length=10;
    if(mobile==""){
        document.getElementById('m_no').innerHTML="**Please enter the mobile number";
        return false ;
    }
   else if(mobile.length!=length){
        document.getElementById('m_no').innerHTML="**Mobile Number length should be 10";
        error = true;
    }
    else if(isNaN(m_no)){
        document.getElementById('m_no').innerHTML="**Mobile number should contain number only"
    }
    else{
        document.getElementById('m_no').innerHTML="";

    }   

    //sending the error message that form contains the error in it
   if(error)
    {
        return false;
    }
}
