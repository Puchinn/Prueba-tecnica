import { useState } from "react";
import getSearch from "../services/getSearch";

function useSearchMovies() {
    const [movies, setMovies] = useState([])
    const searchMovies = async (busqueda) => {
        const movies = await getSearch(busqueda)
        setMovies(movies)
    }
    return { movies, searchMovies }
}

export default useSearchMovies 