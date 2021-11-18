// Variables contenant les zones d'affichage
let zone1=document.getElementById("zone_text1");
let zone2=document.getElementById("zone_text2");
let choix=document.getElementById("zone_text1");;

// Variables de modification
let choix_zone=document.getElementById("choix_zone");
let text_zone=document.getElementById("affiche_text");
let taille_text=document.getElementById("taille_police");
let couleur_text=document.getElementById("change_couleur");


/**
 * Changer la zone sélectionnée où il y aura des modifications
 */
function ChangementZone()
{
    if (choix_zone.value=="1")
    {
        choix=document.getElementById("zone_text1");
        text_zone.value=choix.innerText;
        couleur_text.value=choix.getAttribute("data-couleur");
        taille_text.value=choix.style.fontSize.replace("px","");
    }
    else if (choix_zone.value=="2")
    {
        choix=document.getElementById("zone_text2");
        text_zone.value=choix.innerText;
        couleur_text.value=choix.getAttribute("data-couleur");
        taille_text.value=choix.style.fontSize.replace("px","");
    }
}

/**
 * Changer le texte de la zone sélectionnée
 */
function ChangementTexte()
{
    choix.innerText=text_zone.value;
}

/**
 * Changer la taille du texte de la zone sélectionnée
 */
function ChangementTaille()
{
    choix.style.fontSize=taille_text.value+"px";
}

/**
 * Changer la couleur du texte de la zone sélectionnée
 */
function ChangementCouleur()
{
    choix.setAttribute("data-couleur",couleur_text.value);
    choix.style.color=couleur_text.value;
}