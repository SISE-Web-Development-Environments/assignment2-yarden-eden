
$(document).ready(function () {

    $('#loginForm').validate({

        rules: {
            login_username: {
                pattern: '^[a-zA-Z0-9]*$',
                required: true,
                // minlength: 2
            },
            login_password: {
                // pattern: '^(?=.*\\d)(?=.*[a-zA-Z]).{8,200}$',
                required: true,
                // minlength: 6,
            },
        },
        messages: {
            login_username: {
                pattern: "Your user name must be contains only letters and numbers",
                required: "Please enter a username",
                // minlength: "Your username must consist of at least 2 characters"
            },
            login_password: {
                // pattern: "You have to insert both numbers and letters",
                required: "Please provide a password",
                // minlength: "Your password must be at least 6 characters long"
            },
        },
    
    });

});

function login() {
       
        if ($('#loginForm').valid()) {
            //take the input 
            let userName = document.getElementById("login_username").value;
            let userPassword = document.getElementById("login_password").value;
            //reset them
            document.getElementById("login_username").value = "";
            document.getElementById("login_password").value = "";
            //check if username exsist
            if(containUserName(userName)){
                //check if his password correct
                if(getPasswordOfUserName(userName) == userPassword){
                    //save the user to be the cuurent user
                    currentLoginUser = userName;
                    
                    //just than change to setting
                    changeWindowById("settingSection")
                }
                else{
                    alert("wrong password")
                }
            }
            else{
                alert("user doesnt exist in the system")
            }
            
            
            
        }

}
