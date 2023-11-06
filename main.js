// Création d'une variable dans laquelle j'envoie chaque carte "chien" nommée par la classe .card
// Query Selector All pour les 3 cartes
const cards = document.querySelectorAll('.card')

// On va chercher dans le tableau pour chaque carte
cards.forEach((dogsCard) => {
// On met un EventListener qui réagira au click sur la card
    dogsCard.addEventListener("click", () => {
// Création d'une variable pour récupérer le carte en display none correspondant à la disponibilité du chien
        const available = dogsCard.querySelector(".dispo")        
// Boucle if : si la carte est affiché => la cacher, sinon l'afficher
            if (available.style.display == "block") {
             available.style.display = "none"
            } else {
             available.style.display = "block"
            }
    })
    
});