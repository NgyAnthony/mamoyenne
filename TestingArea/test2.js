/**
 * Created by Anthony on 10/07/2017.
 */

/**
 * Created by Anthony on 28/06/2017.
 */
/* -----CALCUL---- */
/*
 //Valeurs brutes converties pour pouvoir faire le calcul (valeurs net)
 var moyenneList = [];
 var coefList = [];
 var sommeCoef = 0;

 //Valeurs brutes reçues sur la table
 var moyenneNum = [];
 var ajoutNoteNum = prompt("Rentrez votre note...");
 moyenneNum.push(ajoutNoteNum);

 var moyenneDen = [];
 var ajoutNoteDen = prompt("sur...");
 moyenneDen.push(ajoutNoteDen);

 var moyenneCoef = [];
 var ajoutNoteCoef = prompt("coefficient...");
 moyenneCoef.push(ajoutNoteCoef);

 //Push des valeurs brutes en valeurs net
 for(var a=0; a<moyenneNum.length && a< moyenneDen.length ; a++){
 moyenneList.push(moyenneNum[a]/moyenneDen[a]);
 }

 //Somme des coefficients
 for(var x=0; x < coefList.length ; x++){
 sommeCoef += Number(coefList[x]);
 }

 //Algorithme de calcul
 var total = 0;
 for(var i = 0; i < moyenneList.length; i++) {
 total += moyenneList[i] * coefList[i];
 }

 var avg = total / sommeCoef;
 var result = avg * 20;

 console.log(result);
 */




// Compteur


function add(){
    var div = document.getElementById('form');
    var num = document.createElement("INPUT");
    num.setAttribute("type", "number");
    num.setAttribute("placeholder", "Numerateur");
    num.setAttribute("name", "numerateur");
    div.appendChild(num);

    var den = document.createElement("INPUT");
    den.setAttribute("type", "number");
    den.setAttribute("placeholder", "Denominateur");
    den.setAttribute("name", "denominateur");
    div.appendChild(den);

    var coef = document.createElement("INPUT");
    coef.setAttribute("type", "number");
    coef.setAttribute("placeholder", "Coefficient");
    coef.setAttribute("name", "coefficient");
    div.appendChild(coef);
}

//Init
var moyenne = {
    init: function(numerateur,denominateur,coefficient){
        this.numerateur = numerateur;
        this.denominateur = denominateur;
        this.coefficient = coefficient;
    }
};


/*

/*

 */