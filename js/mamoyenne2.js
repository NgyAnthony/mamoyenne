/**
 * Created by Anthony on 23/06/2017.
 */
var moyenneList = [17/20,15/30,19/40];
var coefList = [1,2,4];
var sommeCoef = 0;
for(var x=0; x < coefList.length ; x++){
    sommeCoef += Number(coefList[x])
};

//algo de base
var total = 0;
for(var i = 0; i < moyenneList.length; i++) {
    total += moyenneList[i] * coefList[i];
}

var avg = total / sommeCoef;
var result = avg * 20;

console.log(result);



/*
17/20 * 1 + 15/30 * 2 + 19/40 * 4 = résultat
résultat divisé par sommecoef = résultat n°2
résultat n°2 * 20 = note sur 20

Il reste a : donner l'accès a l'utilisateur d'entrer les valeurs de coefficient, et de la moyenne dans le tableau

+ résultat arrondi

*/

