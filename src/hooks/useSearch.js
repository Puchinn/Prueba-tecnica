import { useState, useEffect, useRef } from "react";

function useSearch() {
    const [busqueda, setBusqueda] = useState(null)

    return [busqueda, setBusqueda]
}