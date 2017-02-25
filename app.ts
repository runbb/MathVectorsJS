import { vector , vectorMath } from "./vectors";

var v : vector = new vector(-4,2);
var u : vector = new vector(3,-5);

var mathing = new vectorMath(v,u);

console.log(mathing.multiplication());
console.log(mathing.addition());
console.log(mathing.subtraction());
console.log(mathing.find());