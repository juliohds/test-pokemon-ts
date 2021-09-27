import PokemonApi from "./PokemonApi"; 
import { EnumPokemons } from './Constants';
import api from "./services/api";

class Pokemon implements PokemonApi {
    public url: string;

    constructor(){           
        this.url = "https://pokeapi.co/api/v2/pokemon/";
    }

    public async getPokemon(name?: EnumPokemons) {
        const { data } = await api.get(`${this.url}${name || ''}`);
        return data.results;
    }
    public savePokemon(): string {        
        throw new Error("Method not implemented.");
    }    
}

export default Pokemon;