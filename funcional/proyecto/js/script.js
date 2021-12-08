window.onload=()=>{
    let data=[];
    axios.get('https://restcountries.com/v3.1/all')
    .then(function (response) {
      // handle success
      data=response.data;
      print(response.data);
    
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
    let print=(data)=>{
        var todo="";
        console.log(data[0]);
        data.forEach(element => {
            todo+=`<button class="badge bg-dark">${element.name.common} - ${element.name.official}</button>`;
        });
        document.getElementById("countries").innerHTML=todo;
    };
    search=()=>{
        let txt=document.getElementById("search").value;
        let found=data.find((pais)=>pais.name.common==txt);
        console.log(found);
        if(found!=null){
            document.getElementById("nameCountry").innerHTML=found.name.common;
            document.getElementById("regionCountry").innerHTML=found.region;
            document.getElementById("capitalCountry").innerHTML=found.capital; 
            document.getElementById("altNameCountry").innerHTML=found.altSpellings;
            document.getElementById("bordersCountry").innerHTML=found.borders;
            document.getElementById("timeCountry").innerHTML=found.timezones;
            document.getElementById("imgCountry").src=found.flags.png;
            document.getElementById("coatCountry").src=found.coatOfArms.png;
            //document.getElementById("mapCountry").src=found.maps.googleMaps; no me dejaba poner el mapa, como le haria usted?
        }
        }
}//llave load
