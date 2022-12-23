import { useEffect, useState } from "react";
import { fetchSinglePokemon } from "../../logic/pokemon";
import "./index.scss";

export function PokemonCard({ pokemon }) {
  const [pokemonData, setPokemonData] = useState({});
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    fetchPokemon();
  }, [pokemon]);

  async function fetchPokemon() {
    setLoading(true)
    const response = await fetchSinglePokemon(pokemon.url);
    setPokemonData(response);
    setLoading(false);
  }

  return (

    <div className="pokemon-card">
      <div>
        <img src={pokemonData.img} alt="" />
      </div>
      <div>
        <strong>id</strong>
        <span>{pokemonData.id}</span>
      </div>
      <div>
        <strong>name</strong>
        <span>{pokemonData.name}</span>
      </div>
    </div>
  );
}
