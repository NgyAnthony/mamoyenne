/**
 * Created by Anthony on 07/06/2017.
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
//Ajout boutton/Clone

function add(){
    var itm = document.getElementById("form");
    var cln = itm.cloneNode(true);
    document.getElementById("wrapper").appendChild(cln)
}