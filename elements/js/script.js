window.onload=()=>{
    //cargar json
    let arrayElem=[];
    var xobj=new XMLHttpRequest();
    xobj.overrideMimeType("application/json");
    xobj.open(`GET`, `./js/PeriodicTableJSON.json`, true);
    xobj.onreadystatechange=function(){
        if(xobj.readyState==4 && xobj.status==`200`){
            let json=JSON.parse(xobj.responseText);
            arrayElem=json.elements;
            let todo="";
            arrayElem.forEach(element => {
                //Lo de los if y varias cosas de las que incluye son ayuda de Diego Vazquez
                if(element.name=="Hydrogen"){
                    todo+=`<li class="Hydrogen" data-id="${arrayElem.indexOf(element)+1}" data-sim="${element.symbol}" data-name="${element.name.toLowerCase()}" data-des="${element.summary}">
                     <abbr title="${element.name}">${element.symbol}</abbr>
                     </li>`;
                }else{
                if(element.category.includes("unknown")){
                    todo+=`<li class="unknown" data-id="${arrayElem.indexOf(element)+1}" data-sim="${element.symbol}" data-name="${element.name.toLowerCase()}" data-des="${element.summary}">
                    <abbr title="${element.name}">${element.symbol}</abbr>
                </li>`;
                }else{
                    todo+=`<li class="${element.category}" id="${element.name.toLowerCase()}"data-id="${arrayElem.indexOf(element)+1}" data-sim="${element.symbol}" data-name="${element.name.toLowerCase()}" data-des="${element.summary}">
                    <abbr title="${element.name}">${element.symbol}</abbr>
                    </li>`;
                    
                /*if(element.category.includes("noble-gas")){
                 todo+=`<li class="noble-gas" data-id="${arrayElem.indexOf(element)+1}" data-sim="${element.symbol}" data-name="${element.name.toLowerCase()}" data-des="${element.summary}">
                  <abbr title="${element.name}">${element.symbol}</abbr>
                  </li>`;
                }else{
                if(element.category.includes("alkali")){
                  todo+=`<li class="alkali" data-id="${arrayElem.indexOf(element)+1}" data-sim="${element.symbol}" data-name="${element.name.toLowerCase()}" data-des="${element.summary}">
                  <abbr title="${element.name}">${element.symbol}</abbr>
                    </li>`;
                }else{
               if(element.category.includes("alkaline")){
                 todo+=`<li class="alkaline" data-id="${arrayElem.indexOf(element)+1}" data-sim="${element.symbol}" data-name="${element.name.toLowerCase()}" data-des="${element.summary}">
                  <abbr title="${element.name}">${element.symbol}</abbr>
               </li>`;
               }else{
               if(element.category.includes("lanthanide")){
                 todo+=`<li class="lanthanide" data-id="${arrayElem.indexOf(element)+1}" data-sim="${element.symbol}" data-name="${element.name.toLowerCase()}" data-des="${element.summary}">
                  <abbr title="${element.name}">${element.symbol}</abbr>
                </li>`;
               }else{
               if(element.category.includes("actinide")){
                todo+=`<li class="actinide" data-id="${arrayElem.indexOf(element)+1}" data-sim="${element.symbol}" data-name="${element.name.toLowerCase()}" data-des="${element.summary}">
                <abbr title="${element.name}">${element.symbol}</abbr>
                </li>`;
                }else{
                if(element.category.includes("metalloid")){
                    todo+=`<li class="metalloid" data-id="${arrayElem.indexOf(element)+1}" data-sim="${element.symbol}" data-name="${element.name.toLowerCase()}" data-des="${element.summary}">
                    <abbr title="${element.name}">${element.symbol}</abbr>
                </li>`;
                }else{
                    if(element.category.includes("polyatomic-non-metal")){
                        todo+=`<li class="polyatomic-non-metal" data-id="${arrayElem.indexOf(element)+1}" data-sim="${element.symbol}" data-name="${element.name.toLowerCase()}" data-des="${element.summary}">
                        <abbr title="${element.name}">${element.symbol}</abbr>
                    </li>`;
                    }
                }
            }
        }
    }
}
} */
                }
                }
                
            });
            document.getElementsByClassName("periodic-table")[0].innerHTML=todo;
               //crear eventos
            var elem =document.getElementsByTagName("li");
            for(var x=0;x<elem.length;x++){
                let nom=elem[x].getAttribute("data-name");
                let des=elem[x].getAttribute("data-des");
                let sim=elem[x].getAttribute("data-sim");
                elem[x].addEventListener('click',(w)=>{
                    document.getElementById("txtElemento").innerText=nom;
                    document.getElementById("txtSimbolo").innerText=sim;
                    document.getElementById("txtDes").innerText=des;
                });
            }
        }
    };
    xobj.send(null); 
}