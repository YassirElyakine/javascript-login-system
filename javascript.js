$(document).ready(function() {
    var getusername = $('input[type="text"]');
    var getpassword = $('input[type="password"]');
    var login = $('#login');
    var register = $('#register');
    login.click(function() {
        if(getusername.val() == account.username && getpassword.val() == account.password) {
            $('h1').text("Successfull login");
            console.log("Account loged in");
        }
        else {
            console.log("invalid input");
            $('h1').text("wrong account or password");
        }
    });
    register.click(function() {
        if(getusername.val() && getpassword.val()) {
            account.username = getusername.val();
            account.password = getpassword.val();
            console.log("Account registered")
            $('h1').text("Successfull register");
        }
        else {
            console.log("Please enter *username* & *password*");
            $('h1').text("Please enter *username* & *password*")
        }
    });
    var account = {
        username: "yassir",
        password: "123"
};
});