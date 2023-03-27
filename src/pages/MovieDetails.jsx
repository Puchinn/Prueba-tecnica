import { useParams } from 'react-router-dom'
import useMovieDetails from '../hooks/useMovieDetails'

function MovieDetails() {
	const { peliId: id } = useParams('peliId')
	const { title, desc, img, poster } = useMovieDetails(id)

	return (
		<div className='hero relative min-h-screen bg-base-content'>
			<div className='absolute top-0 w-full'>
				<img
					className='w-full object-cover object-top'
					src={'https://image.tmdb.org/t/p/original' + poster}
					alt=''
				/>
				<div className='absolute inset-0 bg-black bg-opacity-60'></div>
			</div>
			<div className='hero-content flex-col space-x-4 lg:flex-row'>
				<img
					src={`https://image.tmdb.org/t/p/w500` + img}
					className='max-w-sm rounded-lg shadow-2xl'
				/>
				<div className='text-white'>
					<h1 className='text-5xl font-bold'>{title}</h1>
					<p className='py-6'>{desc}</p>
					<button className='btn-primary btn'>Ver mas</button>
				</div>
			</div>
		</div>
	)
}

export default MovieDetails
