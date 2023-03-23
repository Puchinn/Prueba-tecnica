import { useState } from "react";
import getSearch from "../services/getSearch";

function useSearchMovies() {
    const [movies, setMovies] = useState([])
    const [searching, setSearching] = useState(false)
    const searchMovies = async (busqueda) => {
        setSearching(true)
        const movies = await getSearch(busqueda)
        setMovies(movies)
        setSearching(false)
    }
    return { movies, searchMovies, searching }
}

export default useSearchMovies 