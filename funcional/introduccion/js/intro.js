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

//console.log(suma(2,2,sum2));
var numbers=[1,5,10,15]
var numbersf=[1,5,[10,15]];
var men=['Lopez', 'Perez', 'Juan'];
var users=[
    {id:0, age:10,name:"Juan"},
    {id:1, age:20,name:"Juan"},
    {id:2, age:30,name:"Juan"},
]
var weones=[
    {apellidoP:"Lopez", apellindoM:"Perez",name:"Juan"},
    {apellidoP:"Lopez", apellindoM:"Perez",name:"Juan"},
    {apellidoP:"Lopez", apellindoM:"Perez",name:"Juan"},
]
//map
const isBelowThreshold = (currentValue) => currentValue < 40;
var doubles = numbers.map((num)=>num.age*3);
//reduce el arreglo segun la condicion
var reducer=(previusValue,CurrentValue)=>previusValue+CurrentValue;
var reduce= numbers.reduce(reducer,5);
let filter=numbers.filter((num)=>num>6)
let found = users.find((user)=>user.age>14);
let conca = weones.concat(users);
let filimon= numbers.fill(0,2,4);
let eve=numbers.every(isBelowThreshold);
let fla=numbersf.flat();
let inclu=numbers.includes(5);
let popp=numbers.pop(5);
let puch=numbers.push(5)
let slic=numbers.slice(1,3);
let sor= numbers.sort();
let splic= men.splice(3,2, 'Armando');

console.log(men);