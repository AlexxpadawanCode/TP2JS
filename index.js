// Créer un événément au scroll

// Cacher la navbar si l'utilisateur comment à descendre et la sortir quand il remonte

// Stocker la valeur du précédent niveau de scroll pour savoir si l'on est monté ou descendu

// Connaitre niveau de scroll (window.scrollY)

let previousScroll = window.scrollY;

window.addEventListener("scroll", () => {
    const currentScroll = window.scrollY;

    if (currentScroll > previousScroll) {
        navbar.style.top = "-60px";
    } else {
        navbar.style.top = "0";
    }
    previousScroll = currentScroll
})

//let lastScroll = 0;

// window.addEventListener("scroll", () = > {
//     if (window.scrollY < lastScroll) {
//         navbar.style.top = "0";
//     } else {
//         navbar.style.top = "-60px";
//     }
//     lasScroll = window.scrollY;
// })