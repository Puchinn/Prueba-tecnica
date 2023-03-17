const { VITE_API_KEY } = import.meta.env

const getMovies = async (busqueda) => {
    if (busqueda === '') return null
    try {
        const response = await fetch
            (`https://api.themoviedb.org/3/search/movie?api_key=${VITE_API_KEY}&language=en-US&query=${busqueda}&page=1`)

        const json = await response.json()
        const movies = json.results
        return movies?.map(movie => ({
            id: movie.id,
            title: movie.title,
            date: movie.release_date,
            rate: movie.vote_average,
            image: movie.poster_path
        }))


    } catch (e) {
        throw new Error('Error al buscar peliculas')
    }
}

export default getMovies