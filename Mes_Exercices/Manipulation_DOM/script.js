function ajouterTitre(monTexte, id) {

let titre = document.createElement("h1");
titre.innerHTML = monTexte;
titre.classList.add("titre");
titre.setAttribute("id", id);
titre.style.color = "red";

let addContainer = document.getElementById("add_container");
addContainer.append(titre);

// document.body.append(titre);
    
}

function SupprimerElement()
{
    let titre1 = document.getElementById("titre1");
    titre1.remove();
}



ajouterTitre("Bonjour!","titre1");
ajouterTitre("Bonjour!", "titre2");
