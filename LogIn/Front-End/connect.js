let urlBase = "https://localhost:44333/";

const Logged = ()=>{
    if(document.getElementById("email").value == ""){
        alert("Por favor ingresa tu email");
    }else if (document.getElementById("pass").value == "") {
        alert("Por favor ingresa tu contraseña");
    }else
        MetodoLog();
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
    .then(data => console.log("Método Post api", data));
};

const MetodoReg = () => {
    let userInfo = {
        Email: $('#email').val(),
        UserName: $('#username').val(),
        Pass: $('#pass').val()
    };

    fetch(`${urlBase}/Register`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => console.log("Método Post2 api", data));
};
