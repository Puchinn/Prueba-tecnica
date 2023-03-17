import { useState } from "react";
import getMovies from "../services/getMovies";

function useMovies(busqueda) {
    const [movies, setMovies] = useState([])
    const getSearchMovies = async () => {
        const newMovies = await getMovies(busqueda)
        setMovies(newMovies)
    }
    return [movies, getSearchMovies]
}

export default useMovies