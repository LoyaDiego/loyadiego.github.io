window.onload = function(){
    var boton = document.getElementById("btnaceptar");  
    var txtusuario =document.getElementById("txtusuario");
    var txtpassword =document.getElementById("txtpassword");
    boton.addEventListener(`click`, function(){
        let usuario =txtusuario.value;
        let pass=txtpassword.value;
        if(usuario.trim() == "admin" && pass.trim()== "123"){

        }else{
            document.getElementById("error").innerHTML="credenciales incorrectas";
            txtusuario.style.backgroundColor="#ff0000"
            txtpassword.style.backgroundColor="#ff0000"

        }
    });
}
 function limpiar(){
        txtusuario.style.backgroundColor="#fff"
        txtpassword.style.backgroundColor="#fff"
    }