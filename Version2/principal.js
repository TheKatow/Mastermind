// Tableau de couleur
var a_Nom_Couleur = ["", "Green", "Blue", "Red", "Yellow"];

// pour stocker la solution
var a_solution = [0, 0, 0, 0, 0];

// Compteur d'essais
var iCptEssai = 0;

// on fait disparaitre le bouton pour rejouer
document.getElementById('btnRejouer').style.display='none';


// on génére la solution
for (let index = 1; index < 5; index++) {
    var inombre = Math.floor(Math.random() * 4) + 1;
    if (inombre == 5) {
        a_solution[index] = 4;
    }
    else {
        a_solution[index] = inombre;
    }
}

// TRICHE POUR SOFIANE
for (let index = 1; index < 5; index++) {
    document.getElementById("resultat").innerText += a_solution[index];
}
document.getElementById("resultat").innerText += "\n";

// pour stocker la proposition
var a_proposition = [0, 0, 0, 0, 0];

/////////////////////////////////////////////////////////////////////////
// Les fonctions
/////////////////////////////////////////////////////////////////////////

function fct_Couleur_Correspondante(iCouleur) {
    var str_Couleur = "";
    if (iCouleur == 1) {
        str_Couleur = "Vert "
    } else if (iCouleur == 2) {
        str_Couleur = "Bleu "
    } else if (iCouleur == 3) {
        str_Couleur = "Rouge "
    } else if (iCouleur == 4) {
        str_Couleur = "Jaune "
    }
    return str_Couleur;
}



function action_au_click1() {

    if (document.getElementById("btnCouleur1").tag == 1) {
        document.getElementById("btnCouleur1").style.backgroundColor = "cyan";
        document.getElementById("btnCouleur1").tag++;
        //document.getElementById("resultat").innerText += document.getElementById("btnCouleur1").tag + "\n";
    } else if (document.getElementById("btnCouleur1").tag == 2) {
        document.getElementById("btnCouleur1").style.backgroundColor = "tomato";
        document.getElementById("btnCouleur1").tag++;
        //document.getElementById("resultat").innerText += document.getElementById("btnCouleur1").tag + "\n";
    } else if (document.getElementById("btnCouleur1").tag == 3) {
        document.getElementById("btnCouleur1").style.backgroundColor = "yellow";
        document.getElementById("btnCouleur1").tag++;
    } else {
        document.getElementById("btnCouleur1").style.backgroundColor = "green";
        document.getElementById("btnCouleur1").tag = 1;
        //document.getElementById("resultat").innerText += document.getElementById("btnCouleur1").tag + "\n";
    }

};

function action_au_click2() {

    if (document.getElementById("btnCouleur2").tag == 1) {
        document.getElementById("btnCouleur2").style.backgroundColor = "cyan";
        document.getElementById("btnCouleur2").tag++;
        //document.getElementById("resultat").innerText += document.getElementById("btnCouleur2").tag + "\n";
    } else if (document.getElementById("btnCouleur2").tag == 3) {
        document.getElementById("btnCouleur2").style.backgroundColor = "yellow";
        document.getElementById("btnCouleur2").tag++;
    } else if (document.getElementById("btnCouleur2").tag == 2) {
        document.getElementById("btnCouleur2").style.backgroundColor = "tomato";
        document.getElementById("btnCouleur2").tag++;
        //document.getElementById("resultat").innerText += document.getElementById("btnCouleur2").tag + "\n";
    } else {
        document.getElementById("btnCouleur2").style.backgroundColor = "green";
        document.getElementById("btnCouleur2").tag = 1;
        //document.getElementById("resultat").innerText += document.getElementById("btnCouleur2").tag + "\n";
    }

};

function action_au_click3() {

    if (document.getElementById("btnCouleur3").tag == 1) {
        document.getElementById("btnCouleur3").style.backgroundColor = "cyan";
        document.getElementById("btnCouleur3").tag++;
        //document.getElementById("resultat").innerText += document.getElementById("btnCouleur3").tag + "\n";
    } else if (document.getElementById("btnCouleur3").tag == 2) {
        document.getElementById("btnCouleur3").style.backgroundColor = "tomato";
        document.getElementById("btnCouleur3").tag++;
        //document.getElementById("resultat").innerText += document.getElementById("btnCouleur3").tag + "\n";
    } else if (document.getElementById("btnCouleur3").tag == 3) {
        document.getElementById("btnCouleur3").style.backgroundColor = "yellow";
        document.getElementById("btnCouleur3").tag++;
    } else {
        document.getElementById("btnCouleur3").style.backgroundColor = "green";
        document.getElementById("btnCouleur3").tag = 1;
        //document.getElementById("resultat").innerText += document.getElementById("btnCouleur3").tag + "\n";
    }

};

function action_au_click4() {

    if (document.getElementById("btnCouleur4").tag == 1) {
        document.getElementById("btnCouleur4").style.backgroundColor = "cyan";
        document.getElementById("btnCouleur4").tag++;
        //document.getElementById("resultat").innerText += document.getElementById("btnCouleur4").tag + "\n";
    } else if (document.getElementById("btnCouleur4").tag == 2) {
        document.getElementById("btnCouleur4").style.backgroundColor = "tomato";
        document.getElementById("btnCouleur4").tag++;
        //document.getElementById("resultat").innerText += document.getElementById("btnCouleur4").tag + "\n";
    } else if (document.getElementById("btnCouleur4").tag == 3) {
        document.getElementById("btnCouleur4").style.backgroundColor = "yellow";
        document.getElementById("btnCouleur4").tag++;
    } else {
        document.getElementById("btnCouleur4").style.backgroundColor = "green";
        document.getElementById("btnCouleur4").tag = 1;
        //document.getElementById("resultat").innerText += document.getElementById("btnCouleur4").tag + "\n";
    }

};

var action_au_click_valider = function () {

    // on vient de faire un essai de plus
    iCptEssai++;

    a_proposition[1] = document.getElementById("btnCouleur1").tag;
    a_proposition[2] = document.getElementById("btnCouleur2").tag;
    a_proposition[3] = document.getElementById("btnCouleur3").tag;
    a_proposition[4] = document.getElementById("btnCouleur4").tag;
    //////////////////////
    var i, buttonsToCreate, buttonContainer, newButton;
    buttonsToCreate = ['button1', 'button2', 'button3', 'button4', 'button5', 'FlorianChaudronnerie'];

    buttonContainer = document.getElementById('pourmoi');
    for (i = 0; i < 4; i++) {
        newButton = document.createElement('input');
        newButton.type = 'button';
        newButton.value = buttonsToCreate[i];
        newButton.id = buttonsToCreate[i];
        switch (a_proposition[i + 1]) {
            case 1:
                newButton.style.backgroundColor = "green";
                break;
            case 2:
                newButton.style.backgroundColor = "cyan";
                break;
            case 3:
                newButton.style.backgroundColor = "tomato";
                break;
            case 4:
                newButton.style.backgroundColor = "yellow";
                break;

            default:
                newButton.style.backgroundColor = "black";
                break;
        }
        buttonContainer.appendChild(newButton);
        //ne fonctionne pas
        //document.getElementById("pourmoi").innerText += "je suis sur que cela ne marche pas";

    }
    //ajout dynamique d'un label
    var newlabel = document.createElement("Label");
    newlabel.setAttribute("for", "monid");
    newlabel.innerHTML = "Essai numéro " + iCptEssai + " : ";

    buttonContainer.appendChild(newlabel);



    /////////////////////
   // document.getElementById("resultat").innerText += "\n" + "Essai numéro " + iCptEssai + " : ";
    // for (let index = 1; index < 5; index++) {
    //     document.getElementById("resultat").innerText += fct_Couleur_Correspondante(a_proposition[index]) + " - ";
    //     document.getElementById("resultat").innerText += a_Nom_Couleur[a_proposition[index]] + " - ";

    // }
    //on commence par sauvegarder la solution
    //
    var a_solution_REC = [0, 0, 0, 0, 0];
    for (let index = 0; index < 5; index++) {
        a_solution_REC[index] = a_solution[index];
    }


    var iNbBP = 0; // pour les biens placés
    // compter les biens placés
    for (let index = 1; index < 5; index++) {
        if (a_solution_REC[index] == a_proposition[index]) {
            iNbBP++;
            a_solution_REC[index] = 98;
            a_proposition[index] = 99;
        }
    }
    var iNbMP = 0;
    // compter les mal placés
    // RESTE A FAIRE ET C'EST PAS SIMPLE !
    // Prendre tous les éléments de la proposition
    for (let i = 1; i < 5; i++) {
        // Les comparer avec tous les éléments de la solution
        for (let j = 0; j < 5; j++) {
            if (a_proposition[i] == a_solution_REC[j]) {
                iNbMP++;
                a_solution_REC[j] = 98;
                a_proposition[i] = 99;
            } else {
                // RIEN
            }
        }

    }

    if (iNbBP == 4) {
        alert("Bravo Eric !");
        document.getElementById('btnRejouer').style.display='block';
    } else {
        //document.getElementById("resultat").innerText += "Vous avez " + iNbBP + " bien placé(s)" +
        //    " et " + iNbMP + " mal placé(s)";
        newlabel.innerHTML += "Vous avez " + iNbBP + " bien placé(s) et " + iNbMP + " mal placé(s)" +"<br/>";
        if (iCptEssai == 10) {
            alert("Perdu !, la solution était :");
            // reste à afficher la solution !
            // on empêche de cliquer sur "Valider"
            document.getElementById('btnValider').style.display='none';
            document.getElementById('btnRejouer').style.display='block';
        }
    }
}

var action_au_click_rejouer = function () {
    location.reload();
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

var btnRejouer = document.getElementById('btnRejouer');
btnRejouer.addEventListener("click", action_au_click_rejouer, false);