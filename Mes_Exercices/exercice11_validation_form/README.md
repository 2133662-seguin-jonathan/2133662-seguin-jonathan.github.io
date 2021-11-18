# Exercice 11 - Formulaires HTML



## Directives

- Ajoutez le titre **Coucours de beauté caprin de Montpellier 2021**. l'année (2021) doit être calculé et affiché en Javascript selon la date actuelle. 
- Ajoutez le sous-titre **Fiche d'inscription du participant**.
- Ajoutez aussi un formulaire avec les spécifications décrites plus bas.
- Les deux titres et le formulaire doivent être centrés horizontalement.
- Quand un input à le focus, modifier le en css pour l'indiquer. (Ex. changer la couleur de fond, faire une animation de surbrillance du contour, etc.)
- Utilisez css pour rendre le formulaire un peu plus "attrayant". (espacement entre les inputs, mise en forme de ceux-ci, etc.) 

## Formulaire

- Les informations du formulaire doivent être envoyé à l'adresse "https://mathieufrechette.ca/validation.php" avec la méthode POST

### Section Information propriétaire

| LAbel     | type             | Notes                                                        |
| --------- | ---------------- | ------------------------------------------------------------ |
| Nom       | input type text  | Doit avoir la valeur "proprietaire_nom" à l'attribut name. C'est un champs requis |
| Prénom    | input type text  | Doit avoir la valeur "proprietaire_prenom" à l'attribut name. C'est un champs requis |
| Adresse   | input type text  | Le nombre maximal de caractère est de 50.                    |
| Ville     | input type text  | Le nombre maximal de caractère est de 30.                    |
| Téléphone | input type tel   |                                                              |
| Courriel  | input type email | C'est un champs requis                                       |

 **Validation à faire en Javascript**

- Les champs nom, prénom et courriel ne doivent pas être vide.
- Le numéro de téléphone et le courriel doivent être validées avec une expression régulière.
- La longueur des champs adresse et ville doit aussi être validé en JS.

### Section Information participant

| Label              | type              | Notes                                                        |
| ------------------ | ----------------- | ------------------------------------------------------------ |
| Nom                | input type text   | C'est un champs requis                                       |
| Race               | select            | Les valeurs sont Alpine, Saanen, Nubienne, Toggenbourg, La Mancha. C'est un champs requis |
| Sexe               | input type radio  | La valeur male est sélectionnée par défaut. C'est un champs requis |
| Couleur de la robe | input type text   | C'est un champs requis                                       |
| Taille au garrot   | input type number | C'est un champs requis                                       |
| Notes              | textarea          |                                                              |

**Validation à faire en Javascript**

- Quand on modifie la valeur du sélect de la race, on modifie l'image de la chèvre selon la race sélectionnée.
- Les champs nom, couleur de la robe et taille au garrot ne doivent pas être vide.
- Assurez-vous que la valeur de la taille au garrot est bien un entier positif.