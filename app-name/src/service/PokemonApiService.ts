import {PokemonResponse , Species} from '../model/Pokemon'



export function fetchSpecies(): Promise<Species[]> {
    return fetch("https://pokeapi.co/api/v2/pokemon/")
    .then((res) => res.json())
    .then((data:PokemonResponse) =>{
        return data.results
    })
}