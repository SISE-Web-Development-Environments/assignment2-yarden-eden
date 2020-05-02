
$(document).ready(function () {

    $('#registrationForm').validate({
        rules: {
            fullname: {
                // pattern: '^([a-zA-Z]+\\s)*[a-zA-Z]+$',
                pattern: '^\s*[a-zA-Z]+[ ][a-zA-z]+\s*$',
                required: true,
                //checkFullName: true,
                //wordCount: 2,
            },
            register_username: {
                required: true,
                pattern: '^[a-zA-Z0-9]*$',
                minlength: 2
            },
            register_password: {
                required: true,
                pattern: '^(?=.*\\d)(?=.*[a-zA-Z]).{6,}$'
            },
            email: {
                required: true,
                email: true,
            },
            dt: {
                required: true,
                date: true,
            },
        },
        messages: {
            fullname: {
                pattern:"At least 2 words",
                required: "Please enter your first and last name",
            },
            register_username: {
                pattern: "Only letters and numbers",
                required: "Please enter a username",
                minlength: "At least 2 characters"
            },
            register_password: {
                pattern: "Numbers and letters, at lease 6 characters",
                required: "Please provide a password",
            },
            email: {
                required: "Please enter a valid email address",
                email: "Wrong email format",
            },
        },

    });
});

function saveUser() {
    let name = document.getElementById("register_username").value;
    let password = document.getElementById("register_password").value;
    //const userFullName = document.getElementById("fullname").value;
    //const userMail = document.getElementById("email").value;
    //const userBirthDay = document.getElementById("dt").value;
    
    let user={name,password};
    if(addUser(user)){
        return true;
    }
    else{
        //reset inputs fields of username and password
        document.getElementById("register_password").value = "";
        document.getElementById("register_username").value = "";
        return false;
    }
    
}

function register(){
    if ($('#registrationForm').valid()) {
        if(saveUser()){
            //reset the inputs fields
            document.getElementById("fullname").value = "";
            document.getElementById("register_password").value = "";
            document.getElementById("register_username").value = "";
            document.getElementById("email").value = "";
            document.getElementById("bDate").value = "";
            
            alert("submitted!");
            changeWindowById("dataLogin")
        }

    }

}
