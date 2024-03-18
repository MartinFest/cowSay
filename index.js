const myIdReturn = require("./information");

const cowsay = require("cowsay");

console.log(cowsay.say({
    text: "Nom : " + myIdReturn.name + ", Campus : " + myIdReturn.campus,
    e: "oO",
    T: "U "
}));
