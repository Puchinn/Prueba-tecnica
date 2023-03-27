import { Link } from 'react-router-dom'

function Movie({ title, date, img, rate, id }) {
	return (
		<Link
			to={`/pelicula/${id}`}
			className='group relative block min-h-[400px] w-56 overflow-hidden'>
			<button className='absolute right-2 top-4 z-10 p-1.5'>
				<span className='inline-flex items-center gap-0.5 rounded-xl bg-black/70 px-2 py-1 text-xs font-semibold text-white'>
					{rate}
					<svg
						xmlns='http://www.w3.org/2000/svg'
						className='h-4 w-4 text-yellow-300'
						viewBox='0 0 20 20'
						fill='currentColor'>
						<path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
					</svg>
				</span>
			</button>

			<img
				src={img}
				alt=''
				className='h-64 w-56 object-cover transition duration-500 group-hover:scale-105 sm:h-72'
			/>

			<div className='relative h-full border border-gray-100 bg-white p-3'>
				<span className='whitespace-nowrap bg-secondary-content px-3 py-1.5 text-xs font-medium'>
					{date}
				</span>

				<h3 className='mt-4 text-base font-medium text-neutral'>{title}</h3>
			</div>
		</Link>
	)
}

export default Movie
