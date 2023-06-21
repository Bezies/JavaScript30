const now = new Date();
const ArrowHours = document.querySelector(".hour-hand");
const ArrowMinutes = document.querySelector(".min-hand");
const ArrowSeconds = document.querySelector(".second-hand");


function rotateHours(h) {
    if (h < 12) {
        return (h * 30)
    } else {
        // 360degres / 12 = 30degres 
        return ((h - 12) * 30)
    }
}

// 360degres / 60 = 6degres 
function rotateMinutes(time) {
    return (time * 6)
}

function rotateSeconds(time) {
    return (time * 6)
}

let transformRotateHours = `${rotateHours(now.getHours())}deg`;

let transformRotateMinutes = `${rotateMinutes(now.getMinutes())}deg`;


let transformRotateSecondes = `${rotateSeconds(now.getSeconds())}deg`;



function hour(deg) {
    ArrowHours.style.transform = `rotate(${deg})`
}

hour(transformRotateHours)

function minutes(deg) {
    ArrowMinutes.style.transform = `rotate(${deg})`
}

minutes(transformRotateMinutes)


function seconds(deg) {
    ArrowSeconds.style.transform = `rotate(${deg})`
}

seconds(transformRotateSecondes)


