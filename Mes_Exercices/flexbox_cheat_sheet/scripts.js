function GenererCube()
{
    
    // Supprimer cubes du résultat
    let listeCube = document.querySelectorAll("#resultat *");
    listeCube.forEach(cube=>{cube.remove()})

    // Récuppérer valeurs
    let nbCube = document.getElementById("input_number").value;
    let valeurSelect = document.getElementById("select_valeur").value;
    let resultat = document.getElementById("resultat");

    // Créer mes cubes
    for (let i =1; i<=nbCube;i++)
    {
        let cube = document.createElement("div");
        cube.classList.add("cube");
        cube.innerHTML=i;
        resultat.append(cube);
    }

    // Modifier la valeur de justify-content de la div résultat
    resultat.style.justifyContent = valeurSelect;

}

