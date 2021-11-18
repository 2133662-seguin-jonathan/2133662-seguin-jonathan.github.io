

function EstVide(valeur)
{

    return valeur ==="" ? true:false;
}

function EstValideCourriel(valeur)
{
    const expression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return expression.test(valeur);
}

function AfficherMessage(element, message = '')
{
    const zoneMessage = element.parentElement.querySelector('small');
    zoneMessage.textContent = message;
}

/*
* Validation avec on submit
*
* 1. Champ non vide
* 2. Courriel valide
* 3. 2 champs égaux
*/
function ValidationOnSubmit()
{
    let formValide = true;
    const userCourriel = document.getElementById('user_courriel');
    const userCourrielConfirmation = document.getElementById('user_courriel_confirmation');
    
    AfficherMessage(userCourriel);
    AfficherMessage(userCourrielConfirmation);
    
    if (EstVide(userCourriel.value)) 
    {
        AfficherMessage(userCourriel, "Le courriel ne peut être vide.");
        formValide = false;
    } 
    if (!EstValideCourriel(userCourriel.value)) 
    {
        AfficherMessage(userCourriel, "Le courriel est invalide.");
        formValide = false;
    } 
    if (EstVide(userCourrielConfirmation.value)) {
        AfficherMessage(userCourrielConfirmation, "Le courriel ne peut être vide.");
        formValide = false;
    } 
    if (!EstValideCourriel(userCourrielConfirmation.value)) {
        AfficherMessage(userCourrielConfirmation, "Le courriel est invalide.");
        formValide = false;
    } 
    if (userCourriel.value != userCourrielConfirmation.value) {
        AfficherMessage(userCourrielConfirmation, "Les deux courriels ne correspondent pas.");
        formValide = false;
    } 
    
    return formValide;
}


/*
* Validation avec preventDefault
*
* 1. Nom usager: !="" & !="valeur"
* 
* 2. Password: !="" & >6 charactères
*/
const formPrevent=document.getElementById("form_prevent_default");

formPrevent.addEventListener("submit", function ValidationPreventDefault(e) 
    {
        // Annuler submit html
        e.preventDefault();

        // Vérification prérequis formulaire
        let validation = true;
        const username= document.getElementById("user_nom");
        const password= document.getElementById("user_password");

            // Reset message erreur
        AfficherMessage(username);
        AfficherMessage(password);

            // Vérification username
        if (EstVide(username.value)) 
        {
            AfficherMessage(username, "Le champs est vide");
            validation = false;
        } 
        if (username.value=="admin") 
        {
            AfficherMessage(username, "Username déjà existant");
            validation = false;
        } 
            // Vérification password
        if (EstVide(password.value)) 
        {
            AfficherMessage(password, "Le champs est vide");
            validation = false;
        } 
        if (password.value.length<6)
        {
            AfficherMessage(password, "Password pas assez long");
            validation = false;
        }
        if (password.value=="abcd1234")
        {
            AfficherMessage(password, "Sérieux?");
            validation = false;
        }

        // Retour submit
        if (validation)
        {
            formPrevent.submit();
        }

    }
);