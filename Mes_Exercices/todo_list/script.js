function AddTask() 
{
    // Récupération valeur de l'input texte
    let value_task = document.getElementById("input_task").value;
    let zone_task = document.getElementById("list_zone");
    
    // Ajout de la tache
    let task = document.createElement("li");
    task.onclick=function () {
        task.remove();
    };
    task.classList.add("task_decoration");
    task.innerHTML=value_task;
    zone_task.append(task);

}

