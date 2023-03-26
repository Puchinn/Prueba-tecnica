import { useState, useEffect, useCallback } from "react";
import getSearch from "../services/getSearch";

function useSearchMovies(initialQuery) {
    const [movies, setMovies] = useState([]);
    const [actualPage, setActualPage] = useState(1);
    const [pages, setPages] = useState(1);
    const [isLoading, setIsLoading] = useState(false);

    const getData = useCallback(async (string, pag) => {
        setIsLoading(true);
        const { results, page, total_pages } = await getSearch(string, pag);
        const movies = results.map(movie => ({
            id: movie.id,
            title: movie.title,
            date: movie.release_date,
            rate: movie.vote_average,
            image: movie.poster_path
        }));
        setMovies(movies);
        setActualPage(page);
        setPages(total_pages);
        setIsLoading(false);
    })

    useEffect(() => {
        getData(initialQuery, 1);
    }, [initialQuery]);

    useEffect(() => {
        getData(initialQuery, actualPage);
    }, [actualPage]);

    return { movies, actualPage, pages, setActualPage, isLoading };
}

export default useSearchMovies