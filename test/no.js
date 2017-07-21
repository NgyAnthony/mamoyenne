/**
 * Created by Anthony on 07/06/2017.
 */
/* -----CALCUL---- */
//Valeurs brutes reçues sur la table
var moyenneNum = [];
var moyenneDen = [];
var moyenneCoef = [];
function calcul() {
    //Valeurs brutes converties pour pouvoir faire le calcul (valeurs net)
    var moyenneList = [];
    var coefList = [];
    var sommeCoef = 0;

    //Push des valeurs brutes en valeurs net
    for(var a=0; a<moyenneNum.length && a<moyenneDen.length ; a++){
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
    console.log(result)
}



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

function push(){
    var num = document.getElementsByName("numerateur");
    var den = document.getElementsByName("denominateur");
    var coef = document.getElementsByName("coefficient");
    moyenneNum.push(num);
    moyenneDen.push(den);
    moyenneCoef.push(coef);
}



/* La fonction pushCalcul() push les variables JS de la fonction add() qui créent les inputs HTML dans les tableaux qui sont dans la fonciton calcul() */