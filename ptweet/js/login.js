window.onload = function(){
    var boton = document.getElementById("btnaceptar");  
    var txtusuario =document.getElementById("txtusuario");
    var txtpassword =document.getElementById("txtpassword");

    boton.addEventListener(`click`, function(){
        let usuario =txtusuario.value;
        let pass=txtpassword.value;
        let arreglousuarios=[
            {"id":1, nombre: "federica pluche", imagen: "fede.jpg", username: "fedep", password: "123"},
            {"id":1, nombre: "don camerino", imagen: "dc.jpg", username: "camerino", password: "123"},
            {"id":1, nombre: "vivi pluche", imagen: "vivi.jpg", username: "vivi", password: "123"},
        ];
        let encontro=false;
        arreglousuarios.forEach(fila=>{
            if(fila.username==usuario.trim() && fila.password==pass.trim()){
                encontro=true;
                localStorage.setItem("usuario", JSON.stringify(fila));
                let fecha=new Date();
                localStorage.setItem("Fecha", fecha.getFullYear()+"/"+ fecha.getDay());

            }
        });
        if(encontro){
            ///redireccionar
            location.href="./index.html";

            
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