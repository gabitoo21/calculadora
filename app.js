const process = require("process");

const calculadora = require("./calculadora");
const { log } = require("console");

var operaciones = ["sumar", "restar", "dividir", "multiplicar"]
var operacion = process.argv[2];
var numeroA = Number(process.argv[3])
var numeroB = Number(process.argv[4])
var resultado = 0;

if(operaciones.includes(operacion)){
   if(operacion === "sumar"){
    resultado = calculadora.sumar(numeroA,numeroB)
   }
   else if(operacion === "restar"){
   resultado = calculadora.restar(numeroA,numeroB)
   }
   else if(operacion === "multiplicar"){
    resultado = calculadora.multiplicar(numeroA,numeroB)
   }
   else if(operacion === "dividir"){
   resultado = calculadora.division(numeroA,numeroB)
   }
}
else {
    console.log("error");
}
console.log(resultado);