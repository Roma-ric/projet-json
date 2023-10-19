// Récupération des données depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

/*
pieces.map((piece) =>
{
    //Créer la balise mère et les balises enfants
    const divElement = document.createElement("div");
    divElement.className = "card product bg-light p-3 w-auto";
    const imageElement = document.createElement("img");
    imageElement.src = element.image;
    const nomElement = document.createElement("h4");
    nomElement.innerText = element.nom;
    nomElement.className = "fw-bold"
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = element.description ?? "Pas de description pour le moment";
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${element.prix} ${element.prix <= 30 ? "€" : "€€€"}`;
    prixElement.className = "text-warning"
    const enStock = document.createElement("p");
    enStock.innerText = element.disponibilite ? "En stock" : "Rupture de stock";
    enStock.className = "text-primary"
    const categorieElement = document.createElement("p");
    categorieElement.innerText = element.categorie ?? "(aucune catégorie)";
    categorieElement.className = "text-primary"


    //Ajouter les balises enfants à la balise mère
    divElement.appendChild(imageElement);
    divElement.appendChild(nomElement);
    divElement.appendChild(descriptionElement);
    divElement.appendChild(enStock);
    divElement.appendChild(prixElement);
    divElement.appendChild(categorieElement);

    //Ajouter la balise mère à la section fiches
    const sectionFiches = document.querySelector(".fiches");
    sectionFiches.appendChild(divElement);
}
);
*/

pieces.forEach(element => {
    //Créer la balise mère et les balises enfants
    const divElement = document.createElement("div");
    divElement.className = "card product bg-light p-3 w-auto";
    const imageElement = document.createElement("img");
    imageElement.src = element.image;
    const nomElement = document.createElement("h4");
    nomElement.innerText = element.nom;
    nomElement.className = "fw-bold"
    const descriptionElement = document.createElement("p");
    descriptionElement.innerText = element.description ?? "Pas de description pour le moment";
    const prixElement = document.createElement("p");
    prixElement.innerText = `Prix: ${element.prix} ${element.prix <= 30 ? "€" : "€€€"}`;
    prixElement.className = "text-warning"
    const enStock = document.createElement("p");
    enStock.innerText = element.disponibilite ? "En stock" : "Rupture de stock";
    enStock.className = "text-primary"
    const categorieElement = document.createElement("p");
    categorieElement.innerText = element.categorie ?? "(aucune catégorie)"; 
    categorieElement.className = "text-primary"


    //Ajouter les balises enfants à la balise mère
    divElement.appendChild(imageElement);
    divElement.appendChild(nomElement);
    divElement.appendChild(descriptionElement);
    divElement.appendChild(enStock);
    divElement.appendChild(prixElement);
    divElement.appendChild(categorieElement);

    //Ajouter la balise mère à la section fiches
    const sectionFiches = document.querySelector(".fiches");
    sectionFiches.appendChild(divElement);
});


