let urlBase = "https://localhost:44333/";

if(localStorage.getItem("email")==""){ 
    localStorage.setItem("alert", "No");
    location.href="../LogIn/index.html";
}

const WebScrapping = () =>{
    const {Builder} = require('selenium-webdriver');
    const chrome = require('selenium-webdriver/chrome');

    const service = new chrome.ServiceBuilder('/home/cassiel/Documentos/chromedriver_linux64/');
    const driver = new Builder().forBrowser('chrome').setChromeService(service).build();

    await driver.get('https://occ.com.mx');
    
    let searchBox = await driver.findElement(By.id('search-box-keyword'));
    let searchButton = await driver.findElement(By.id('btn-search-box'));

    await searchBox.sendKeys('document.getElementById("inputEmpresa").value');
    await searchButton.click();

    const vac = driver.findElement(By.tagName('p')).getText();

    let v = vac.match('/(\d+)/g');
    document.getElementById('SearchButt').innerHTML =  vac;
    console.log(v);
}

const Searched = ()=>{
    if(document.getElementById("inputEmpresa").value == ""){
        alert("Por favor ingresa una empresa");
    }else
        WebScrapping();
        /*MetodoBusqueda();
        GuardarBusqueda();*/
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