import { useRef, useState, useMemo } from 'react'
import { searchMovies } from '../services/movies'

const useMovies = ({ search, orden }) => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [getMovieError, setGetMovieError] = useState(null)
  const prevSearch = useRef(search)

  const getMovies = useMemo(() => {
    return async ({ search }) => {
      if (prevSearch.current === search) return

      try {
        setLoading(true)
        prevSearch.current = search
        const newMovies = await searchMovies({ search })
        setMovies(newMovies)
      } catch (e) {
        setGetMovieError(e.message)
      } finally {
        setLoading(false)
      }
    }
  }, [])
  const sortedMovies = useMemo(() => {
    return orden
      ? [...movies].sort((a, b) => a.title.localeCompare(b.title))
      : movies
  }, [orden, movies])

  return { movies: sortedMovies, getMovies, loading }
}

export default useMovies
