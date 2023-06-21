const start = document.querySelector(".player__button");
const media = document.querySelector("video");
const progressFilled = document.querySelector(".progress__filled");
const progress = document.querySelector(".progress");



// PLAY PAUSE VIDEO 
function Toggle() {
    if (media.paused) {
        media.play()
        start.innerHTML = "❚ ❚";
    } else {
        media.pause();
        start.innerHTML = "►"
    }
}

start.addEventListener("click", Toggle);
media.addEventListener("click", Toggle)


// MA METHODE
// MUSIC + / - 
const son = document.querySelector(`input[name="volume"]`);

let volume = media.volume;

son.addEventListener("change", () => {
    media.volume = son.value;
})

// SPEED RANGE 
const vitesse = document.querySelector(`input[name="playbackRate"]`)

vitesse.addEventListener("click", () => {
    media.playbackRate = vitesse.value;
})


// METHODE RAPIDE AVEC FUNTION POUR SON ET VITESSE 

// const ranges = document.querySelectorAll(`input[type="range"]`)

// ranges.forEach(range => range.addEventListener("change", handleChangeRangeValue))


// function handleChangeRangeValue() {
//     media[this.name] = this.value
// }

// Go forward go backward video

const before = document.querySelector(`.player__button[data-skip="-10"`);
const after = document.querySelector(`.player__button[data-skip="25"`);



before.addEventListener("click", () => {
    media.currentTime = media.currentTime - 10;
})

after.addEventListener("click", () => {
    media.currentTime = media.currentTime + 25;
})







// PROGRESSION BAR 

// setInterval(() => {
//     progressFilled.style.flexBasis = `${media.currentTime / (media.duration / 100)}%`

// }, 10);

function handleProgress() {
    const percent = (media.currentTime / media.duration) * 100;
    progressFilled.style.flexBasis = `${percent}%`
}

function scrub(e) {
    console.log(e);
    const scrubTime = (e.offsetX / progress.offsetWidth) * media.duration;
    media.currentTime = scrubTime;
}

media.addEventListener("timeupdate", handleProgress)
progress.addEventListener("click", scrub)



