const inputs = document.querySelectorAll(".controls input");


function handleUpdate() {
    // variable pour ajouter les "px" aux valeurs blur et spacing 
    const suffix = this.dataset.sizing || '';
    // formule pour changer les valeurs des variables CSS 
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);

}

inputs.forEach(input => {
    input.addEventListener('change', handleUpdate)
})

inputs.forEach(input => {
    input.addEventListener('mousemove', handleUpdate)
})


