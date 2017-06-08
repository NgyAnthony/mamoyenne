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
    calcul : function () {
        var calcul = ((noteNum / noteDen) * noteCoef) / noteCoef;
        return calcul;
    },
    decrire : function () {
        var decrire = console.log(moyenne.calcul())
    },
    ajout : function () {
        var ajoutNoteNum = prompt("Rentrez votre note...");
        var ajoutNoteDen = prompt("sur...");
        var ajoutNoteCoef = prompt("coefficient...");
        moyenne.init(ajoutNoteNum, ajoutNoteDen, ajoutNoteCoef);
        moyenne.push(moyenneList);
    },

    menu : function () {
        console.log("1 : Afficher ma moyenne");
        console.log("2 : Ajouter une moyenne");
        console.log("0 : Quitter");
    }
};

//Menu
moyenne.menu();
var choix = "";
while (choix !== "0") {
    choix = prompt("Choissisez une option");
    if (choix === "1") {
        moyenne.decrire()
    } else if (choix === "2") {
        moyenne.ajout()
    } else if (choix === "0") {
        console.log("Au revoir !");
    } else {
        console.log("Cette valeur m'est inconnue...");
        contact.menu();
    }
}
