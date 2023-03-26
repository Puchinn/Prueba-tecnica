import ListOfMovies from './../components/ListOfMovies'
import Input from '../components/Input'
import Pagination from './../components/Pagination'
import { useSearchParams } from 'react-router-dom'
import useSearchMovies from '../hooks/useSearchMovies'

export default function Resultados() {
	const [params] = useSearchParams()
	const query = params.get('query')
	const { movies, actualPage, pages, setActualPage, isLoading } =
		useSearchMovies(query)

	return (
		<div className='w-full'>
			<Input />
			<div className='mb-4 flex justify-center'>
				{isLoading && <progress className='progress mx-auto w-56'></progress>}
			</div>
			<Pagination
				pages={pages}
				setActualPage={setActualPage}
				actualPage={actualPage}
			/>
			<ListOfMovies movies={movies} />
		</div>
	)
}
