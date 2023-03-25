const { VITE_API_KEY } = import.meta.env
const URL = `https://api.themoviedb.org/3/search/movie?api_key=${VITE_API_KEY}&language=en-US`

const getSearch = async (string, num) => {
    const validateString = typeof string === 'string' ? '&query=' + string : ''
    const validateNum = isNaN(num) ? '&page=' + 1 : '&page=' + num
    const query = validateString + validateNum
    const response = await fetch(URL + query)
    const json = await response.json()
    return json
}

export default getSearch



// const movies = json.results?.map(movie => ({
//     id: movie.id,
//     title: movie.title,
//     date: movie.release_date,
//     rate: movie.vote_average,
//     image: movie.poster_path
// }))