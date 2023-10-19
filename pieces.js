// Récupération des données depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();
// const pieces = await fetch("pieces-autos.json").then(pieces => pieces.json());


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










