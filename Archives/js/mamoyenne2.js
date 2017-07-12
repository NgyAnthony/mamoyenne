/**
 * Created by Anthony on 23/06/2017.
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
/* -----TABLE----- */

function generate_table() {
    // get the reference for the body
    var body = document.getElementsByTagName("body")[0];

    // creates a <table> element and a <tbody> element
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    var tblThead= document.createElement("thead");

    // creating all cells
    // add the row to the end of the table body


    for (var h = 0; h < 1; h++) {
        var row1 = document.createElement("tr");

        for (var k = 0; k < 3; k++) {
            var thead = document.createElement("th");
            if (k == 0){
                var theadText = document.createTextNode("Note obtenue...");
            }
            else if (k == 1){
                var theadText = document.createTextNode("sur...");
            }
            else if (k == 2){
                var theadText = document.createTextNode("coefficient...");
            }
            thead.appendChild(theadText);
            row1.appendChild(thead);
        }
        tblBody.appendChild(row1)
    }

    for (var i = 0; i < 3; i++) {
        // nombre de rangées
        var row = document.createElement("tr");

        for (var j = 0; j < 3; j++) {
            // Create a <td> element and a text node, make the text
            // node the contents of the <td>, and put the <td> at
            // the end of the table row
            var cell = document.createElement("td");
            cell.contentEditable = true;
            var cellText = document.createTextNode("...");
            cell.appendChild(cellText);
            row.appendChild(cell);
        }
        // add the row to the end of the table body
        tblBody.appendChild(row);
    }

    tbl.appendChild(tblThead);
    // put the <tbody> in the <table>
    tbl.appendChild(tblBody);
    // appends <table> into <body>
    body.appendChild(tbl);
    // sets the border attribute of tbl to 2;
    //tbl.setAttribute("border", "2");
}

/*
17/20 * 1 + 15/30 * 2 + 19/40 * 4 = résultat
résultat divisé par sommecoef = résultat n°2
résultat n°2 * 20 = note sur 20

Il reste a : donner l'accès a l'utilisateur d'entrer les valeurs de coefficient, et de la moyenne dans le tableau

+ résultat arrondi

*/

/*

problème : comment push une donnée de tableau x et de tableau y pour former une donnée z...
 */

