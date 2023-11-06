
const cards = document.querySelectorAll('.card')

cards.forEach((dogsCard) => {
    dogsCard.addEventListener("click", () => {
        const available = dogsCard.querySelector(".dispo")
        available.style.display = "block"
    })
    
});