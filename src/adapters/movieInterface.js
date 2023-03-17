import movies from '../mocks/results.json'

const mappedMovies = movies.results?.map(movie => ({
    id: movie.id,
    title: movie.title,
    date: movie.release_date,
    rate: movie.vote_average,
    image: movie.poster_path
}))

export default mappedMovies