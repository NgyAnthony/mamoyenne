/**
 * Created by Anthony on 07/06/2017.
 */

var moyenneList = [];
var moyenne = {
    init : function(noteNum, noteDen, noteCoef){
        this.noteNum = noteNum;
        this.noteDen = noteDen;
        this.noteCoef = noteCoef;
    },
    decrire : function () {
        var decrire = console.log(calcul());
    },
    ajout : function () {
        var ajoutNoteNum = prompt("Rentrez votre note...");
        var ajoutNoteDen = prompt("sur...");
        var ajoutNoteCoef = prompt("coefficient...");
        moyenne = Object.create(moyenne);
        moyenne.init(ajoutNoteNum, ajoutNoteDen, ajoutNoteCoef);
        moyenneList.push(moyenne);
    },
    tableau : function () {
        console.log(moyenneList);
    },

    menu : function () {
        console.log("1 : Afficher ma moyenne");
        console.log("2 : Ajouter une moyenne");
        console.log("0 : Quitter");
    }
};

function calcul() {
    for (var i = 0, j = moyenneList.length; i < j; i++) {
        var calcul = ((parseFloat(this.moyenneList[i].noteNum) * parseFloat(this.moyenneList[i].noteCoef)) / (parseFloat(this.moyenneList[i].noteDen) * parseFloat(this.moyenneList[i].noteCoef)));
        var somme = calcul * 20;
        return somme;
    }
}


//Menu
moyenne.menu();
var choix = "";
while (choix !== "0") {
    choix = prompt("Choissisez une option");
    if (choix === "1") {
        console.log(moyenne.decrire());
    } else if (choix === "2") {
        moyenne.ajout();
    } else if (choix === "0") {
        console.log("Au revoir !");
    } else if (choix === "3") {
        console.log(moyenne.tableau());
    } else {
        console.log("Cette valeur m'est inconnue...");
        moyenne.menu();
    }

}


