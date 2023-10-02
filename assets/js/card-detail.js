
const backbutton = document.getElementById("backbutton")
const pokemonInfo = document.getElementById("infoJs")
const body = document.getElementById("background");
const details = document.getElementById('details-js');

const x = "pokemon"
const pokemonName = new URLSearchParams(window.location.search).get(x);

const majorbutton = document.getElementById("majorbutton");

majorbutton.addEventListener("click", () => {
    if (isMajor(majorbutton)) {
        majorbutton.innerHTML = '<i class="material-icon top_icon">Major Button</i>';
    } else {
        majorbutton.innerHTML = '<i class="material-icons topbar__icon topbar__icon--selected">major</i>';
    }
});

backbutton.addEventListener('click', () => {
        let host = location.origin;
        location.href = host.concat('/projetopokedex/index.html');
})

    pokeApi.getPokemonByName(pokemonName).then(function (pokemonDetails) {
        generateHTML(pokemonDetails);
    });

function isMajor(button) {
    const icon = button.firstElementChild;
    return icon.classList.contains('topbar__icon--selected')
}

function generateHTML(pokemonDetails) {
    const basicInfo = generateBasicInfo(pokemonDetails.summary);
    pokemonInfo.innerHTML = basicInfo;
    body.className = `${pokemonDetails.summary.type}`;
    details.innerHTML = generateAboutInfo(pokemonDetails.about);
}




    function generateAboutInfo(about) {
        return `
        <table class="details__about">
            <tbody>
            <tr>
                <th>Species</th>
                <td>${about.species}</td>
            </tr>
            <tr>
                <th>Height</th>
                <td>${about.height * 10} cm</td>
            </tr>
            <tr>
                <th>Weight</th>
                <td>${about.weight / 10} Kg</td>
            </tr>
            <tr>
                <th>Abilities</th>
                <td>${about.abilities.join(', ')}</td>
            </tr>
            </tbody>
        </table>
        `;
    }