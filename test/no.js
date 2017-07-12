/**
 * Created by Anthony on 07/06/2017.
 */
/* -----CALCUL---- */
function calcul() {
    //Valeurs brutes converties pour pouvoir faire le calcul (valeurs net)
    var moyenneList = [];
    var coefList = [];
    var sommeCoef = 0;

    //Valeurs brutes reçues sur la table
    var moyenneNum = [];
    var moyenneDen = [];
    var moyenneCoef = [];

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
}


//Ajout boutton/Clone
var pressedNumber = 0;
function counter() {
    pressedNumber = pressedNumber+1;
}

var moyenne = {
    init: function(numerateur,denominateur,coefficient){
        this.numerateur = numerateur;
        this.denominateur = denominateur;
        this.coefficient = coefficient;
    }
};

function add(){
        var div = document.getElementById('form');
    var num = document.createElement("INPUT");
        num.setAttribute("type", "number");
        num.setAttribute("placeholder", "Numerateur");
        num.setAttribute("name", "numerateur");
        num.setAttribute("id", pressedNumber);
    div.appendChild(num);

    var den = document.createElement("INPUT");
        den.setAttribute("type", "number");
        den.setAttribute("placeholder", "Denominateur");
        den.setAttribute("name", "denominateur");
        num.setAttribute("id", pressedNumber);
    div.appendChild(den);

    var coef = document.createElement("INPUT");
        coef.setAttribute("type", "number");
        coef.setAttribute("placeholder", "Coefficient");
        coef.setAttribute("name", "coefficient");
        num.setAttribute("id", pressedNumber);
    div.appendChild(coef);
}

function pushCalcul(){
    for (var i = 0; i < pressedNumber; i++) {
        var moy = Object.create(moyenne);
        moy.init(document.getElementsByName(numerateur), document.getElementsByName(denominateur), document.getElementsByName(coefficient));
    }
    moyenneNum.push(moy(document.getElementsByName(numerateur)));
    moyenneDen.push(moy(document.getElementsByName(denominateur)));
    moyenneCoef.push(moy(document.getElementsByName(coefficient)));
    console.log(result)
}