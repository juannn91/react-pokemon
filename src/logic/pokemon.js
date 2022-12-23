export async function fetchPaginatedPokemonAPI(url = "https://pokeapi.co/api/v2/pokemon/"){
    const result = await fetch(url);
    const data = await result.json();

    return {
        currentPage : data.count,
        totalPages : getTotalPages(data.count),
        next: data.next,
        previous: data.previous,
        results: data.results
    }
}

function getTotalPages(totalPokemon){
    const PAGINATED_BY = 20

    return Math.floor(totalPokemon/PAGINATED_BY);
}

export async function fetchSinglePokemon(url = "https://pokeapi.co/api/v2/pokemon/"){
    const result = await fetch(url);
    const data = await result.json();
    return {
        id : data.id,
        name : data.name,
        url: data.url,
        img: data.sprites?.back_default,
    }
}
