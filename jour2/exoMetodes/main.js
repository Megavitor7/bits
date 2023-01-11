let lol = []
lol.push(`lol`)
lol.push(`mdr`)
lol.push(`ptdr`)
lol.push(`xptdr`)
lol.push(`yptdr`) 
console.log(lol);
//5
let pldr = [`sdqv`,`sdqv`,`sdqv`,`sdqv`,`sdqv`]
pldr.push(`drdrdrd`)
pldr.unshift(`drdrdrd`)
console.log(pldr);
//6
let prdr = [`sdqv`,`sdqv`,`sdqv`,`sdqv`,`sdqv`]
prdr.shift(`drdrdrd`)
console.log(prdr);
//7
let pmdr = [`sdqv`,`sdqv`,`sdqv`,`sdqv`,`sdqv`]
pmdr.splice(4,1,`bite`)
//8
let prenoms = ["John", "Marie", "Luc", "Emma", "Francois"];
prenoms.splice(1, 1, "Ayhan");
prenoms.splice(-2, 1, "Elias");
console.log(prenoms);
//9
let preno = ["Ayoub", "Jamila", "Alex", "Natchez", "Bene"];
preno.splice(preno.indexOf("Jamila"), 1, "Zulma");
preno.splice(preno.indexOf("Ayoub"), 1, "Adame");
console.log(preno);
//10
let pren = ["Ayoub", "Jamila", "Alex", "Natchez", "Bene"];
pren.splice(pren.indexOf("Natchez"), 1);
pren.splice(pren.indexOf("Bene"), 1);
console.log(pren);
//11
let classe = []
let etudiants = [`etudiant1`, `etudiant2`, `etudiant3`, `etudiant4`, `etudiant5`, `etudiant6`, `etudiant7`, `etudiant8`, `etudiant9`, `etudiant10`]

for (let i = 0; i < etudiants.length; i++) {
    let etudiant = etudiants[i];
    classe.push(etudiant);
    console.log(etudiant + " vient de rentrer en classe.");
}
console.log("Liste des étudiants en classe: " + classe.join(", "));
//12
let clas = []
let etudiant = [`etudiant1`, `etudiant2`, `etudiant3`, `etudiant4`, `etudiant5`, `etudiant6`, `etudiant7`, `etudiant8`, `etudiant9`, `etudiant10`, `etudiant11`, `etudiant12`]
let etudiantsTrompes = []

for (let i = 0; i < etudiants.length; i++) {
    let etudiant = etudiants[i];
    if (i < 10) {
        classe.push(etudiant);
        console.log(etudiant + " vient de rentrer en classe.");
    } else {
        etudiantsTrompes.push(etudiant);
        console.log(etudiant + " s'est trompé de classe.");
    }
}
console.log("Liste des étudiants en classe: " + clas.join(", "));
console.log("Liste des étudiants qui se sont trompés: " + etudiantsTrompes.join(", "));
