const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = []

fetch(endpoint).then(response => response.json())
    .then(data => cities.push(...data))


function findMatch(wordToMatch, cities) {
    return cities.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.city.match(regex) || place.state.match(regex)
    })
}


const searchBar = document.querySelector("#search");
const suggestions = document.querySelector(".suggestions");


searchBar.addEventListener('change', displayMatches);
searchBar.addEventListener('keyup', displayMatches);

function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
}


function displayMatches() {
    const ArrayMatch = findMatch(this.value, cities);
    const html = ArrayMatch.map(place => {
        const regex = new RegExp(this.value, 'gi');
        const cityName = place.city.replace(regex, `<span class="hl">${this.value}</span>`)
        const stateName = place.state.replace(regex, `<span class="hl">${this.value}</span>`)

        return `<li>
            <span class="name">${cityName}, ${stateName}</span>
            <span classe="population">${numberWithCommas(place.population)}</span>
        </li>
        `
    }).join('')
    suggestions.innerHTML = html;
}



