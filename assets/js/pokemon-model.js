class pokemonIndex {
    number;
    name;
    type;
    types = [];
    photo;
}

class PokemonDetails {
    summary = new Pokemon();
    about = new About();
}


class About {
    species;
    height;
    weight;
    abilities = [];
}