//1 
let prenom = prompt(`bite`)
alert(prenom[0])
//2
let pwenom = prompt(`bite`)
alert(pwenom.substring[0])
//3
let plenom = prompt("Entrez votre prénom:");
if (plenom.length < 5) {
    alert("Votre prénom est trop court!");
} else {
    alert(plenom[4]);
}
//4
let pzenom = prompt("Entrez votre prénom:");
if (pzenom.length < 5) {
    alert("Votre prénom est trop court! Il ne contient que " + pzenom.length + " caractères.");
    alert(pzenom[prenom.length - 1]);
} else {
    alert(pzenom[4]);
}
//5
let poenom = prompt("Entrez votre prénom:");
alert(poenom.toLowerCase());
alert(poenom.toUpperCase());
alert(poenom[0].toUpperCase() + poenom.substring(1).toLowerCase());
alert(poenom[0].toLowerCase() + poenom.substring(1).toUpperCase());


