var a_solution = [0, 0, 0, 0, 0];


for (let index = 1; index < 5; index++) {
    var iNombre = Math.floor(Math.random() * 6) + 1;
    if (iNombre == 7) {
        a_solution[index] = 6;
    } else {
        a_solution[index] = iNombre;
    }

}

for (let index = 1; index < 5; index++) {
    document.getElementById("resultat").innerText += a_solution[index];
}

var a_proposition = [0, 0, 0, 0, 0];




function action_au_click1() {



    if (document.getElementById("btnCouleur1").tag == 1) {
        document.getElementById("btnCouleur1").style.backgroundColor = "cyan";
        document.getElementById("btnCouleur1").tag++;
    } else if (document.getElementById("btnCouleur1").tag == 2) {
        document.getElementById("btnCouleur1").style.backgroundColor = "tomato";
        document.getElementById("btnCouleur1").tag++;
    } else if (document.getElementById("btnCouleur1").tag == 3) {
        document.getElementById("btnCouleur1").style.backgroundColor = "yellow";
        document.getElementById("btnCouleur1").tag++;
    } else if (document.getElementById("btnCouleur1").tag == 4) {
        document.getElementById("btnCouleur1").style.backgroundColor = "purple";
        document.getElementById("btnCouleur1").tag++;
    } else if (document.getElementById("btnCouleur1").tag == 5) {
        document.getElementById("btnCouleur1").style.backgroundColor = "pink";
        document.getElementById("btnCouleur1").tag++;
    } else {
        document.getElementById("btnCouleur1").style.backgroundColor = "green";
        document.getElementById("btnCouleur1").tag = 1;
    }

};

function action_au_click2() {

    if (document.getElementById("btnCouleur2").tag == 1) {
        document.getElementById("btnCouleur2").style.backgroundColor = "cyan";
        document.getElementById("btnCouleur2").tag++;
    } else if (document.getElementById("btnCouleur2").tag == 2) {
        document.getElementById("btnCouleur2").style.backgroundColor = "tomato";
        document.getElementById("btnCouleur2").tag++;
    } else if (document.getElementById("btnCouleur2").tag == 3) {
        document.getElementById("btnCouleur2").style.backgroundColor = "yellow";
        document.getElementById("btnCouleur2").tag++;
    } else if (document.getElementById("btnCouleur2").tag == 4) {
        document.getElementById("btnCouleur2").style.backgroundColor = "purple";
        document.getElementById("btnCouleur2").tag++;
    } else if (document.getElementById("btnCouleur2").tag == 5) {
        document.getElementById("btnCouleur2").style.backgroundColor = "pink";
        document.getElementById("btnCouleur2").tag++;
    } else {
        document.getElementById("btnCouleur2").style.backgroundColor = "green";
        document.getElementById("btnCouleur2").tag = 1;
    }

};

function action_au_click3() {

    if (document.getElementById("btnCouleur3").tag == 1) {
        document.getElementById("btnCouleur3").style.backgroundColor = "cyan";
        document.getElementById("btnCouleur3").tag++;
    } else if (document.getElementById("btnCouleur3").tag == 2) {
        document.getElementById("btnCouleur3").style.backgroundColor = "tomato";
        document.getElementById("btnCouleur3").tag++;
    } else if (document.getElementById("btnCouleur3").tag == 3) {
        document.getElementById("btnCouleur3").style.backgroundColor = "yellow";
        document.getElementById("btnCouleur3").tag++;
    } else if (document.getElementById("btnCouleur3").tag == 4) {
        document.getElementById("btnCouleur3").style.backgroundColor = "purple";
        document.getElementById("btnCouleur3").tag++;
    } else if (document.getElementById("btnCouleur3").tag == 5) {
        document.getElementById("btnCouleur3").style.backgroundColor = "pink";
        document.getElementById("btnCouleur3").tag++;
    } else {
        document.getElementById("btnCouleur3").style.backgroundColor = "green";
        document.getElementById("btnCouleur3").tag = 1;
    }

};

function action_au_click4() {

    if (document.getElementById("btnCouleur4").tag == 1) {
        document.getElementById("btnCouleur4").style.backgroundColor = "cyan";
        document.getElementById("btnCouleur4").tag++;
    } else if (document.getElementById("btnCouleur4").tag == 2) {
        document.getElementById("btnCouleur4").style.backgroundColor = "tomato";
        document.getElementById("btnCouleur4").tag++;
    } else if (document.getElementById("btnCouleur4").tag == 3) {
        document.getElementById("btnCouleur4").style.backgroundColor = "yellow";
        document.getElementById("btnCouleur4").tag++;
    } else if (document.getElementById("btnCouleur4").tag == 4) {
        document.getElementById("btnCouleur4").style.backgroundColor = "purple";
        document.getElementById("btnCouleur4").tag++;
    } else if (document.getElementById("btnCouleur4").tag == 5) {
        document.getElementById("btnCouleur4").style.backgroundColor = "pink";
        document.getElementById("btnCouleur4").tag++;
    } else {
        document.getElementById("btnCouleur4").style.backgroundColor = "green";
        document.getElementById("btnCouleur4").tag = 1;
    }

};

var action_au_click_valider = function () {
    a_proposition[1] = document.getElementById("btnCouleur1").tag;
    a_proposition[2] = document.getElementById("btnCouleur2").tag;
    a_proposition[3] = document.getElementById("btnCouleur3").tag;
    a_proposition[4] = document.getElementById("btnCouleur4").tag;

    document.getElementById("resultat").innerText += "\n Vous avez joué :  ";
    for (let index = 1; index < 5; index++) {
        document.getElementById("resultat").innerText += a_proposition[index];
    }


    var a_solution_rec = [0, 0, 0, 0, 0];

    for (let index = 1; index < 5; index++) {
        a_solution_rec[index] = a_solution[index];

    }




    var iNbBP = 0;

    for (let index = 1; index < 5; index++) {
        if (a_solution_rec[index] == a_proposition[index]) {
            iNbBP++;
            a_solution_rec[index] = 98;
            a_proposition[index] = 99;
        }
    }

    var iNbMP = 0;

    for (let index = 1; index < 5; index++) {
        for (let index2 = 1; index2 < 5; index2++) {
            if (a_solution_rec[index2] == a_proposition[index]) {
                iNbMP++;
                a_solution_rec[index2] = 98;
                a_proposition[index] = 99;
            }

        }
    }

    if (iNbBP == 4) {
        alert("Bravo");
    } else {
        document.getElementById("resultat").innerText += "\n" + "Vous avez " + iNbBP + " bien placé(s) et " + iNbMP + " de mal placé(s).";
    }
}

var btnCouleur1 = document.getElementById('btnCouleur1');
btnCouleur1.addEventListener("click", action_au_click1, false);
var btnCouleur2 = document.getElementById('btnCouleur2');
btnCouleur2.addEventListener("click", action_au_click2, false);
var btnCouleur3 = document.getElementById('btnCouleur3');
btnCouleur3.addEventListener("click", action_au_click3, false);
var btnCouleur4 = document.getElementById('btnCouleur4');
btnCouleur4.addEventListener("click", action_au_click4, false);

var btnValider = document.getElementById('btnValider');
btnValider.addEventListener("click", action_au_click_valider, false);





