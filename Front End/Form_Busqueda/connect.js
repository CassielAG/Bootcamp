let urlBase = "https://localhost:44333/";

const Logged = ()=>{
    if(document.getElementById("inputEmpresa").value == ""){
        alert("Por favor ingresa una empresa");
    }else
        MetodoBusqueda();
        GuardarBusqueda();
}

const MetodoBusqueda = () => {
    let userInfo = {
        Business: document.getElementById("inputEmpresa").value
    };
    
    fetch(`${urlBase}/api/Search`, {
        method: 'GET',
        body: JSON.stringify(userInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => console.log("Busqueda correcta", data));
};

const GuardarBusqueda = () => {
    let userInfo = {
        Business: document.getElementById("inputEmpresa").value
    };
    
    fetch(`${urlBase}/api/Search`, {
        method: 'POST',
        body: JSON.stringify(userInfo),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(response => response.text())
    .then(data => console.log("Busqueda guardada", data));
};

const GuardarHistorial = () => {
    fetch(`${urlBase}/historial`)
    .then(response => response.text())
    .then(data => console.log("Busqueda correcta", data));
};