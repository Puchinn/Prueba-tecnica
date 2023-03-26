import Movie from './Movie'

function ListOfMovies({ movies }) {
	const isArray = Array.isArray(movies)
	const hasMovies = isArray && movies.length >= 1
	return (
		<div>
			{hasMovies ? (
				<ul className='mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 p-2'>
					{movies.map((movie) => (
						<Movie
							key={movie.id}
							title={movie.title}
							date={movie.date}
							img={`https://image.tmdb.org/t/p/w400` + movie.image}
							rate={movie.rate}></Movie>
					))}
				</ul>
			) : (
				<p>No se encontraron peliculas</p>
			)}
		</div>
	)
}

export default ListOfMovies
