/**
 * Created by Anthony on 07/06/2017.
 */
/* -----CALCUL---- */
//Valeurs brutes reçues sur la table
var moyenneNum = [];
var moyenneDen = [];
var moyenneCoef = [];
var sommeCoef = 0;
//Valeurs brutes converties pour pouvoir faire le calcul (valeurs net)
var moyenneList = [];
var total = 0;


function calcul() {
if(moyenneNum.length == 0 || moyenneCoef.length == 0 || moyenneDen.length == 0){
    var result0 = (moyenneNum[0] / moyenneDen[0]) * 20
    console.log(result0)
}
else{
    //Push des valeurs brutes en valeurs net
    for(var a=0; a<moyenneNum.length && a<moyenneDen.length ; a++){
        moyenneList.push(moyenneNum[a]/moyenneDen[a]);
    }

    //Somme des coefficients
    for(var x=0; x < moyenneCoef.length ; x++){
        sommeCoef += Number(moyenneCoef[x]);
    }

    //Algorithme de calcul
    for(var i = 0; i < moyenneList.length; i++) {
        total += moyenneList[i] * moyenneCoef[i];
    }

    var avg = total / sommeCoef;
    var result = avg * 20;
    console.log(result);
    }
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

var counter = 0;
function buttonPushCounter(){
        counter++
}

function push(){
    while (moyenneNum.length > 0 || moyenneCoef.length > 0 || moyenneDen.length > 0) {
        moyenneNum.pop();
        moyenneCoef.pop();
        moyenneDen.pop();
        moyenneList.pop();
        sommeCoef = 0;
        total = 0;
    }
    var num = document.getElementsByName("numerateur");
    var den = document.getElementsByName("denominateur");
    var coef = document.getElementsByName("coefficient");
    for(var a = 0; a < counter ; a++){
        if (isNaN(num[a].value) || isNaN(coef[a].value) || isNaN(den[a].value)){
            console.log("INPUT" + [a] + "is empty.")
        }
        else{
            moyenneNum.push(num[a].value);
            moyenneDen.push(den[a].value);
            moyenneCoef.push(coef[a].value);
        }
    }