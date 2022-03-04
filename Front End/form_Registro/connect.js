let urlBase = "https://localhost:44333/";

if(localStorage.getItem("alert")=="No"){ 
    alert("Inicia sesión para buscar");
}
sessionStorage.clear()

const Registred = ()=>{
    if(document.getElementById("name").value == ""){
        alert("Por favor ingresa tu Nombre");
    }else if (document.getElementById("email").value == "") {
        alert("Por favor ingresa tu email");
    }else if (document.getElementById("pass").value == "") {
        alert("Por favor ingresa tu contraseña");
    }else if (document.getElementById("passConf").value == "") {
        alert("Por favor ingresa tu contraseña");
    }else if (!(document.getElementById("passConf").value == document.getElementById("pass").value)) {
        alert("Las contraseñas no coinciden");
    }else
        localStorage.setItem("email", document.getElementById("email").value);
        localStorage.setItem("pass", document.getElementById("pass").value);
        //MetodoReg();
        location.href="../LogIn/index.html";
}

const MetodoReg = () => {
    let userInfo = {
        Email: document.getElementById("email").value,
        UserName: document.getElementById("name").value,
        Pass: document.getElementById("pass").value
    };

    fetch(`${urlBase}/Register`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => console.log("Usuario registrado", data));
};
