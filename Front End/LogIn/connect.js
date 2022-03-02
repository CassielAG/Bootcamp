let urlBase = "https://localhost:44333/";

const Logged = ()=>{
    if(document.getElementById("email").value == ""){
        alert("Por favor ingresa tu email");
    }else if (document.getElementById("pass").value == "") {
        alert("Por favor ingresa tu contraseña");
    }else
        //MetodoLog();
        location.href="../Form_Busqueda/form_busqueda.html";
}

const MetodoLog = () => {
    let userInfo = {
        Email: $('#email').val(),
        Pass: $('#pass').val()
    };
    
    fetch(`${urlBase}/api/LogIn`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => console.log("LogIn correcto", data));
};
