
function prueba() {
        window.alert("El usuario se ha creado con éxito");
    return false; }

    function validarfor(){

        var nom = document.getElementById("Nombre").value; 
        var ape = document.getElementsByName("Apellidos")[0].value;
        var nac = document.getElementsByName("Nacimiento")[0].value;
        var correo = document.getElementsByName("email")[0].value;
        var con = document.getElementById("passwd").value;
        
        var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        var con = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        
        if ( !expr.test(correo) ){                                                            //COMPRUEBA MAIL
            alert("Error: La dirección de correo " + correo + " es incorrecta.");
            return false;
        }
    
        if ((con.length == 0)) {  //COMPRUEBA CAMPOS VACIOS
        window.alert("El usuario se ha creado con éxito");
        return false; 
        } }

        function prueba2(){
            var con = document.getElementById("passwd").value;
            if ((con.length == 0)) {  //COMPRUEBA CAMPOS VACIOS
                window.alert("El usuario se ha creado con éxito");
                return false; 
                }
        }