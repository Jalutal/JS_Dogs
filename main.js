
const cards = document.querySelectorAll('.card')

cards.forEach((dogsCard) => {
    dogsCard.addEventListener("click", () => {
        const available = dogsCard.querySelector(".dispo")        
            if (available.style.display == "block") {
             available.style.display = "none"
            } else {
             available.style.display = "block"
            }
    })
    
});