import Movie from './components/Movie'
import Nav from './components/Nav'
import Hero from './components/Hero'
import useMovies from './hooks/useMovies'
import { useState } from 'react'

function App() {
	const [movies, getSearchMovies] = useMovies()
	const [valor, setValor] = useState('')
	const hasMovies = movies.length > 0

	const handleSubmit = () => {
		getSearchMovies(valor)
	}

	const handleChange = (event) => {
		const newValue = event.target.value
		setValor(newValue)
		console.log(newValue)
	}

	return (
		<div className='App' data-theme='winter'>
			<div className='flex h-screen flex-col bg-base-200'>
				<Nav />
				<Hero />
				<form
					action='#'
					onSubmit={handleSubmit}
					className='form-control flex flex-row items-center justify-center gap-x-5 p-5'>
					<input
						onChange={handleChange}
						value={valor}
						name='query'
						className='input-bordered input w-96'
						placeholder='Buscar pelicula...'
					/>
					<button className='btn-primary btn text-white'>Buscar</button>
				</form>
			</div>
			{hasMovies ? (
				<ul className='mx-auto grid max-w-7xl grid-cols-[repeat(auto-fit,minmax(200px,1fr))] gap-10 bg-base-200 p-2'>
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

export default App
