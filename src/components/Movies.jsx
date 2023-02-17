import './movies.css'

function Cards ({ movies }) {
  return (
    <div className='moviesContainer'>
      {
        movies.map((movie) => (
          <div className='movie' key={movie.id}>
            <div>
              <img src={movie.poster} alt={movie.title} />
              <h3>{movie.title}</h3>
              <p>{movie.year}</p>
            </div>
          </div>
        ))
      }
    </div>
  )
}

function NoResults () {
  return (
    <p>No movies has been found</p>
  )
}
const Movies = ({ movies }) => {
  const hasMovies = movies?.length > 0
  return (
    hasMovies
      ? <Cards movies={movies} />
      : <NoResults />
  )
}

export default Movies
