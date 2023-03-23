import { useState, useEffect } from "react";

function useInput() {
    const [value, setValue] = useState('')
    const [error, setError] = useState('')
    useEffect(() => {
        if (/^ /.test(value)) return setError('El texto no puede comenzar con un espacio.')
        if (value.length !== 0 && value.length < 2) return setError('El texto tiene que ser mayor o igual a dos caracteres')
        if (value.length !== 0 && value.length > 50) return setError('Maximo de 50 caracteres')
        if (value.length !== 0 && !/^[a-zA-Z0-9 ]+$/.test(value)) return setError('El texto no puede contener caracteres especiales')
        setError('')
    }, [value])
    return { value, setValue, error }
}

export default useInput