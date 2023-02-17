import './app.css'
import { useState, useEffect } from 'react'
import Movies from './components/movies'
import useMovies from './Hooks/useMovies'
import useSearch from './Hooks/useSearch'

const App = () => {
  const [orden, setOrden] = useState(false)
  const { search, setSearch, searchError } = useSearch()
  const { movies, getMovies, loading } = useMovies({ search, orden })

  function handleSort () {
    setOrden(!orden)
  }
  function handlerEvent (event) {
    event.preventDefault()
    getMovies({ search })
  }

  function handleChange (e) {
    setSearch(e.target.value)
  }

  useEffect(() => console.log('wololo'), [getMovies])

  return (
    <div className='container'>
      <header>
        <h1>Buscador de Pelis Fachero</h1>
        <form onSubmit={handlerEvent}>
          <input onChange={handleChange} name='search' value={search} placeholder='Scary Movie, Star Wars, Hotel Transilvania...' />
          <input type='checkbox' onChange={handleSort} checked={orden} />
          <button>Buscar</button>
        </form>
        {searchError && <p style={{ color: 'red' }}>{searchError}</p>}
      </header>
      <main>
        {loading ? <h3>Cargando...</h3> : <Movies movies={movies} />}
      </main>
    </div>
  )
}

export default App
