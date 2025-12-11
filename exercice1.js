// Les variables sont initialisées par la saisie utilisateur
let x = readline("Veuillez entrer une valeur pour x  : ");

let y = prompt("Veuillez entrer une valeur pour y  : ");
let z = prompt("Veuillez entrer une valeur pour z  : ");


// 1. Afficher le type de chaque variable
console.log("--- Types Initiaux ---");


console.log("Valeur de x :", x);
console.log("Le type de x est :", typeof x); 

console.log("Valeur de y :", y);
console.log("Le type de y est :", typeof y); 

console.log("Valeur de z :", z);
console.log("Le type de   z est :", typeof z); 


// 2. Conversion de x en nombre
console.log("--- Conversion de x en Nombre ---");
x = Number(x); 

// Afficher le nouveau type
console.log("Nouvelle valeur de x après Number(x) :", x);
console.log("Le nouveau type de x est :");
console.log("Le type :", typeof x);