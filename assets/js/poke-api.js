
const PokeAPI = {}

function convertPokeApiDetailToPokemon(pokeDetail) {
    const pokemon = new Pokemon ()
    pokemon.number = pokeDetail.id 
    pokemon.name = pokeDetail.name

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon

PokeAPI.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
}}


function convertPokeApiDetailsToPokemonDetails(pokemonInfo) {
    const pokemon = new PokemonDetails();

    const pokemonIndex = convertPokeApiDetailsToPokemon(pokemonInfo);
    pokemon.Index = pokemonIndex;

    const about = new About();

    about.species = pokemonInfo.species.name;
    about.height = pokemonInfo.height;
    about.weight = pokemonInfo.weight;
    about.abilities = pokemonInfo.abilities.map(ability => ability.ability.name);
    
    pokemon.about = about;
    return pokemon;
}


PokeAPI.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
        .then((response) => response.json())
        .then(convertPokeApiDetailsToPokemon)
}

PokeAPI.getPokemons = (offset = 0, limit = 8) => {
    const url = `http://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=0${limit}`
    
    
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(PokeAPI.getPokemonDetails))
        .then((detailRequests)=> Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)
        .catch((error) => console.log(error));

}

PokeAPI.getPokemonByName = (pokemonName = '') => {
    const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`

    return fetch(url)
    .then((response) => response.json())
    .then(convertPokeApiDetailsToPokemonDetails)
    .catch((error) => console.log(error))
}