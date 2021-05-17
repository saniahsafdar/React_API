import {useEffect, useState} from React;
import {PokemonResponse, Species} from '../model/Pokemon';
import {fetchSpecies} from  '../service/PokemonApiService'
import React from 'react'

function PokemonList{
    const [species, setSpecies] = useState<Species[]>([]);
    useEffect(() =>{
        fetchSpecies().then(data => {
            setSpecies(data);
        });
    }, []);

    return(
        <div className="PokemonList">
            <h2>List of Pokemon</h2>
            <ol>
                <li>

                </li>
            </ol>
        </div>
    )
}

export default PokemonList