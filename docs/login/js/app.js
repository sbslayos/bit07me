function login(){
    var user, password

    user = document.getElementById("username").value;
    password = document.getElementById("password").value;
     
    if( user == "bit" && password == "2023"){
        window.location="../../docs/exercise/index.html";
    } else{
        alert("Datos incorrectos")
    }

}