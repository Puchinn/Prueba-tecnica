import { useState, useEffect } from "react"
import getDetails from "../services/getDetails"

function useMovieDetails(id) {
    const [title, setTitle] = useState('')
    const [desc, setDesc] = useState('')
    const [img, setImg] = useState('')
    const [poster, setPoster] = useState('')

    useEffect(() => {
        getDetails(id)
            .then(res => {
                const { title, overview, poster_path, backdrop_path } = res
                setTitle(title)
                setDesc(overview)
                setImg(poster_path)
                setPoster(backdrop_path)
            })
    })

    return { title, desc, img, poster }

}

export default useMovieDetails