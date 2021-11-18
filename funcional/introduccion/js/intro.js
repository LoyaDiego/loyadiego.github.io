//Imperativa
const hola ="Juano";
const decirhola=()=>{
    console.log(`Hi ${hola}`);
}
//decirhola();

//const dhi=(name)=>`Hi ${name}`;
//console.log(dhi("jose"));

const sum =(a,b)=> a + b;
const sum2 =(a,b)=> a - b;
const suma =(a,b,sum)=>sum(a,b);

console.log(sum(2,2,sum2));