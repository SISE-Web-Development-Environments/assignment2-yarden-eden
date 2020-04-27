
//initialize array for saving users
var allUsers;

$(document).ready(function(){
    
    var allUsers = new Array();
    var defaultUser = {
        name:"p",
        password:"p"
    };
    allUsers.push(defaultUser);

    if(localStorage.getItem("allUsers")==null){
        localStorage.setItem("allUsers",JSON.stringify(allUsers));
    }


    //check if the default user exist in the array
    if(containUser(defaultUser)==false){
      allUsers = JSON.parse(localStorage.getItem("allUsers"));
      allUsers.push(defaultUser);
      localStorage.setItem("allUsers", JSON.stringify(allUsers));
    }

    if(localStorage.getItem("allUsers"==null)){
        localStorage.setItem("allUsers",JSON.stringify(allUsers));
    }
})


/*************switching window**************/
function changeWindow(id) {
    let section = document.getElementsByTagName('section');

    for(i=0; i<section.length; i++){
            section[i].style.display = 'none';
    }
    
    document.getElementById(id.getAttribute("data-option")).style.display = "block"
}


function changeWindowById(id) {
    let section = document.getElementsByTagName('section');

    for(i=0; i<section.length; i++){
            section[i].style.display = 'none';
    }
    
    document.getElementById(id).style.display = "block"
}


  
