window.addEventListener("keydown", (e) => {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const touch = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return //pour les touches ou il n'y a pas de son 
    audio.currentTime = 0; //pour pouvoir cliquer très vite et ne pas attendre la fin du son pour le rejouer
    audio.play()
    touch.classList.add("playing")
})

// MA SOLUTION 

// window.addEventListener("keyup", (e) => {
//     const touch = document.querySelector(`.key[data-key="${e.keyCode}"]`)
//     touch.classList.remove("playing")
// })


// LA SOLUTION 

function removeTransition(e) {
    if (e.propertyName !== 'transform') return
    this.classList.remove('playing')
}

const keys = document.querySelectorAll(".key");
keys.forEach(key => key.addEventListener("transitionend", removeTransition)) 