import { PokemonCard } from '../pokemon-card';
import './index.scss'
export function PokemonList({data}){
    return (
        <div className='pokemon-list'>
            <Pokemons data={data}></Pokemons>
        </div>
    )
}

function Pokemons({data}){
    return data.map( (pokemon, index) => {
        return  <PokemonCard key={`pokemon-${pokemon.id}-${index}`} pokemon={pokemon}></PokemonCard>
  })
}