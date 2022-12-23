
import './App.css';
import { fetchPaginatedPokemonAPI } from './logic/pokemon';
import {PokemonList} from './components/pokemon-list'
import { useState, useEffect } from 'react';


function App() {
  const [pokemonList, setPokemonList] = useState([]);
  const [nextPage, setNextPage] = useState(undefined);
  const [previousPage, setPreviousPage] = useState(undefined);
  const [currentPage, setCurrentPage] = useState(0);
  const [totalPages, setTotalPage] = useState(0);

useEffect(() => {
  fetchAndRenderPokemonApi();
}, []);


async function fetchAndRenderPokemonApi(url) {
  const data = await fetchPaginatedPokemonAPI(url);
  console.log(data);
  setPokemonList(data.results);
  setNextPage(data.next);
  setCurrentPage(data.currentPage);
  setTotalPage(data.totalPages);
  setTotalPage(data.totalPages);
  setPreviousPage(data.previous);
}

function fetchNexPage(){
  fetchAndRenderPokemonApi(nextPage)
}

function fetchPreviousPage(){
  fetchAndRenderPokemonApi(previousPage)
}


  return (
    <div className="App">
      <PokemonList data={pokemonList || []}/>
      <div className='paginator'>
        <button disabled={!previousPage} onClick={fetchPreviousPage}> Previous</button>
        <span> {currentPage} of {totalPages} </span>
        <button disabled={!nextPage} onClick={fetchNexPage}> Next </button>
      </div>
    </div>
  );
}

export default App;
