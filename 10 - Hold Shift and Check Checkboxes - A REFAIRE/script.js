const checkbox = document.querySelectorAll('input[type="checkbox"]')

let lastCheck;

function handleCheck(e) {
    let inBetween = false
    if (e.shiftKey && this.checked) {
        checkbox.forEach(box => {
            if (box === this || box === lastCheck) {
                inBetween = !inBetween
            }

            if (inBetween) {
                box.checked = true
            }
        })

    }
    lastCheck = this
}




checkbox.forEach(box => box.addEventListener("click", handleCheck))