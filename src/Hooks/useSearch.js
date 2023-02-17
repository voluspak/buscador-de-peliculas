import { useState, useEffect, useRef } from 'react'

function useSearch () {
  const [search, setSearch] = useState('')
  const [searchError, setSearchError] = useState(null)
  const isFirstSearch = useRef(true)

  useEffect(() => {
    if (isFirstSearch.current) {
      isFirstSearch.current = search === ''
      return
    }
    if (search === '') {
      setSearchError('No se puede buscar una pelicula vacia')
    } else if (search.match(/^\d+$/)) {
      setSearchError('No se puede buscar una pelicula con un numero')
    } else if (search.length < 3) {
      setSearchError('La busqueda debe tener al menos tres caracteres')
    } else if (search.length > 3) {
      setSearchError('')
    }
  }, [search])
  return { search, setSearch, searchError }
}

export default useSearch
