let menu = document.querySelector("nav ul")
let bars = document.querySelector(".fa-bars")

    bars.addEventListener("click", () => {
        menu.classList.toggle("show")
    })