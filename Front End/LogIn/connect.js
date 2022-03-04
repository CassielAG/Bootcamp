let urlBase = "https://localhost:44333/";

const Logged = ()=>{
    if(document.getElementById("email").value == ""){
        alert("Por favor ingresa tu email");
    }else if (document.getElementById("pass").value == "") {
        alert("Por favor ingresa tu contraseña");
    }else if (localStorage.getItem("email") == document.getElementById("email").value && 
                localStorage.getItem("pass") == document.getElementById("pass").value) {
        //MetodoLog();
        location.href="../Form_Busqueda/form_busqueda.html";
    }else{
        alert("Usuario NO registrado");
    }
}

const MetodoLog = () => {
    let userInfo = {
        Email: document.getElementById("email").value,
        Pass: document.getElementById("pass").value
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
