const pokeID = window.location.search.split('=')[1];
const titleCard = document.querySelector('.titleCard')
const getDivDetail = document.querySelector('.detailCard')

function getPokemonDetail() {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeID}/`
    const response = fetch(url)
    const data = response.json()
    return data
}

function convertPokemon() {
    const pokemon = getPokemonDetail();
    getDivDetail.className = `detailCard ${pokemon.types[0].type.name}`;
    titleCard.innerHTML = `${pokemon.name} status`;
    getDivDetail.innerHTML = `<div class="titleAndTypes">
    <div class="title">
        <span class="number">#${pokemon.id}</span>
    </div>
    
    <div class="detailCardTypes">
        <div class="detailCardTypesTitle">Types</div>
        ${
            pokemon.types.map((type) => 
            `<div class="detailCardListItens${type.type.name}">${type.type.name}</div>`).join('')
        }
    </div>
</div>
<div class="info">
<div class="detailCardStats">
    <div class="detailCardStatsTitle">Stats</div>
    <div class="detailCardStatsList">
        <div class="detailCardListItens">HP: ${pokemon.stats[0].base_stat}</div>
        <div class="detailCardListItens">Attack: ${pokemon.stats[1].base_stat}</div>
        <div class="detailCardListItens">Defense: ${pokemon.stats[2].base_stat}</div>
        <div class="detailCardListItens">Special Attack: ${pokemon.stats[3].base_stat}</div>
        <div class="detailCardListItens">Special Defense: ${pokemon.stats[4].base_stat}</div>
        <div class="detailCardListItens">Speed: ${pokemon.stats[5].base_stat}</div>
    </div>
</div>
<div class="detailCardimg">
    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}">
</div>
</div>`
    }

