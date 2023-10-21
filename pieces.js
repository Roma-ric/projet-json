// Récupération des données depuis l'API |V|
const reponse = await fetch("http://localhost:8081/pieces", { //Si possible ajouter le numero de l'objet à recuperer ${id}
    method: "GET"
});
const pieces = await reponse.json();

function genereListProduit(List) {
    List.forEach(element => {
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
}
genereListProduit(pieces);

//Trier les sections
const boutonReogarniser = document.getElementById("reorganiser");
boutonReogarniser.addEventListener("click", function () {
    pieces.sort((a, b) => a.prix - b.prix);
    document.querySelector(".fiches").innerHTML = "";
    genereListProduit(pieces);
}, false);

//Filtrer les sections
const filter = document.getElementById("filter");
filter.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter((piece) => piece.prix <= 35);
    document.querySelector(".fiches").innerHTML = "";
    genereListProduit(piecesFiltrees);
}, false);

//Filtrer les sections optique
const filterOptique = document.getElementById("filter-optique");
filterOptique.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter((piece) => piece.categorie == "Optiques");
    document.querySelector(".fiches").innerHTML = "";
    genereListProduit(piecesFiltrees);
}, false);

//Filtrer les sections freinage
const filterFreinage = document.getElementById("filter-freinage");
filterFreinage.addEventListener("click", function () {
    const piecesFiltrees = pieces.filter((piece) => piece.categorie == "Freinage");
    document.querySelector(".fiches").innerHTML = "";
    genereListProduit(piecesFiltrees);
}, false);

//Filtrer les noms des sections dont les prix sont <= 35
const noms = pieces.filter(piece => piece.prix <= 35);

//Création de la liste
const abordablesElements = document.createElement('ul');
//Ajout de chaque nom à la liste
for (let i = 0; i < noms.length; i++) {
    const nomElement = document.createElement('li');
    nomElement.innerText = noms[i].nom;
    abordablesElements.appendChild(nomElement)
}
// Ajout de l'en-tête puis de la liste au bloc résultats filtres
document.querySelector('.abordables').appendChild(abordablesElements);

//Ajouter une piece à la liste |V|
const envoie = await fetch("http://localhost:8081/pieces$", { //Pas de $ à la fin de l'Endpoints
    method: "POST",
    body: JSON.stringify({
        "id": 5,
        "nom": "Balai d'essuie-glace",
        "prix": 29.10,
        "categorie": "Freinage",
        "image": "./images/balai-essuie-glace.png",
        "description": "Performances d’essuyage au top ! Longueur : 550 mm.",
        "disponibilite": true
    }),
    headers: { "Content-Type": "application/json" }
});

//Supprimer une piece de la liste |V|
const supprimer = await fetch("http://localhost:8081/pieces/n", { //Numero de l'objet à supprimer ${id}
    method: "DELETE",
    headers: { "Content-Type": "application/json" }
});

//Mofifier une piece de la liste |V| 
const modifier = await fetch("http://localhost:8081/pieces/n", { //Numero de l'objet à modifier ${id}//Pas prête
    method: "PATCH", //PATCH (Modifier la partie donnéé) ou PUT(Modifier le contenu total)
    body: '{"nom": "Liquide de frein original"}',
    headers: { "Content-Type": "application/json" }
});

//localStorage
//Récupérer 
const valeur = window.localStorage.getItem("")

//Ajouter 
window.localStorage.setItem("", "");

//Supprimer
window.localStorage.removeItem("");




