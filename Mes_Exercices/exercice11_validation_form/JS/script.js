let titre = document.getElementById("titre");

const annee = new Date();
// Titre html avec année en js
titre.innerHTML= "Coucours de beauté caprin de Montpellier "+annee.getFullYear();

// Fonction déterminer si champs est vide
function EstVide(valeur)
{
    return valeur ==="" ? true:false;
}

// Fonction déterminer si email est valide
function EstValideCourriel(valeur)
{
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(valeur);
}

// Fonction déterminer si téléphone est valide
function EstValideTel(valeur)
{
    const expression = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
    return expression.test(valeur);
}

// Validation longueur adresse
function TailleAdresse(valeur)
{
    let choix=false;

    if (valeur.length>50)
    {
        choix=true;
    }
    return choix;
}

// Validation longueur ville
function TailleVille(valeur)
{
    let choix=false;

    if (valeur.length>30)
    {
        choix=true;
    }
    return choix;
}

// changer image
const race=document.getElementById("race");
race.addEventListener("change", function ChangerImage()
{
    const img= document.getElementById("image");
    const race=document.getElementById("race");
    if (race.value=="Alpine")
    {
        img.src = 'images/race_alpine.jpg';
    }
    else if (race.value=="Saanen")
    {
        img.src = 'images/race_saanen.jpg';
    }
    else if (race.value=="Nubienne")
    {
        img.src = 'images/race_nubienne.jpg';
    }
    else if (race.value=="Toggenbourg")
    {
        img.src = 'images/race_toggenbourg.jpg';
    }
    else if (race.value=="LaMancha")
    {
        img.src = 'images/race_laMancha.jpg';
    }
})


// Valider taille garrot
function ValiderGarrot(valeur)
{
    choix=false;
    if (valeur <0)
    {
        choix=true;
    }
    return choix;
}

// Afficher message erreur
function AfficherMessage(element, message = '')
{
    const zoneMessage = element.parentElement.querySelector('small');
    zoneMessage.textContent = message;
}

function ValidationFormulaire()
{
    const nom_prop=document.getElementById("nom_prop");
    const prenom_prop=document.getElementById("prenom");
    const adresse=document.getElementById("adr");
    const ville=document.getElementById("ville");
    const tel=document.getElementById("tel");
    const courriel=document.getElementById("email");

    const nom_part=document.getElementById("nom_part");
    const race=document.getElementById("race");
    const sexe=document.getElementById("sexe");
    const robe=document.getElementById("robe");
    const garrot=document.getElementById("garrot");
    const not=document.getElementById("note");

    let formValide=true;

    // Validation non vide nom et prénom
    AfficherMessage(nom_prop, "");
    if (EstVide(nom_prop.value))
    {
        AfficherMessage(nom_prop, "Le nom est vide.");
        formValide=false;
    }
    AfficherMessage(prenom_prop, "");
    if (EstVide(prenom_prop.value))
    {
        AfficherMessage(prenom_prop, "Le prénom est vide.");
        formValide=false;
    }
    // Validation courriel
    AfficherMessage(courriel, "");
    if (EstVide(courriel.value))
    {
        AfficherMessage(courriel, "Le courriel est vide.");
        formValide=false;
    }
    else if (!EstValideCourriel(courriel.value))
    {
        AfficherMessage(courriel, "Format invalide");
        formValide=false;
    }
    // Validation téléphone
    AfficherMessage(tel, "");
    if (EstVide(tel.value))
    {
        AfficherMessage(tel, "Le téléphone est vide.");
        formValide=false;
    }
    else if (!EstValideTel(tel.value))
    {
        AfficherMessage(tel, "Format invalide");
        formValide=false;
    }
    // Validation adresse
    AfficherMessage(adresse, "");
    if (TailleAdresse(adresse.value))
    {
        AfficherMessage(adresse, "Max de 50 charactères");
        formValide=false;
    }
    // Validation ville
    AfficherMessage(ville, "");
    if (TailleVille(ville.value))
    {
        AfficherMessage(ville, "Max de 30 charactères");
        formValide=false;
    }
    // Validation vide nom et robe participant
    AfficherMessage(nom_part, "");
    if (EstVide(nom_part.value))
    {
        AfficherMessage(nom_part, "Le nom est vide.");
        formValide=false;
    }
    AfficherMessage(robe, "");
    if (EstVide(robe.value))
    {
        AfficherMessage(robe, "La couleur de la robe est vide.");
        formValide=false;
    }
    // Validation Garrot
    AfficherMessage(garrot, "");
    if (EstVide(garrot.value))
    {
        AfficherMessage(garrot, "La taille du garrot est vide.");
        formValide=false;
    }
    else if (ValiderGarrot(garrot.value))
    {
        AfficherMessage(garrot, "La taille du garrot doit être positive.");
        formValide=false;
    }

    return formValide;
}