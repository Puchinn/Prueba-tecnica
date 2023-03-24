import { useLoaderData, useNavigation } from 'react-router-dom'
import ListOfMovies from './../components/ListOfMovies'
import getSearch from './../services/getSearch'
import Input from '../components/Input'
import Pagination from './../components/Pagination'

export default function Resultados() {
	const { movies } = useLoaderData()
	const { state } = useNavigation()

	return (
		<div className='w-full'>
			<Input />
			<div className='mb-4 flex justify-center'>
				{state === 'loading' ? (
					<progress className='progress mx-auto w-56'></progress>
				) : (
					''
				)}
			</div>
			<div>
				<div></div>
				<ListOfMovies movies={movies} />
				<Pagination />
			</div>
		</div>
	)
}

export async function loader({ request }) {
	const url = new URL(request.url)
	const query = url.searchParams.get('query')
	const movies = await getSearch(query)
	return { movies }
}
