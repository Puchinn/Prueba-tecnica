const { VITE_API_KEY } = import.meta.env

const getDetails = async (id) => {
    const url = `https://api.themoviedb.org/3/movie/${id}?api_key=${VITE_API_KEY}&language=es`
    const response = await fetch(url)
    const json = await response.json()
    return json
}

export default getDetails