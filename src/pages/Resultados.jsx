import { useLoaderData, useNavigation } from 'react-router-dom'
import ListOfMovies from './../components/ListOfMovies'
import getSearch from './../services/getSearch'
import Input from '../components/Input'

export default function Resultados() {
	const { movies } = useLoaderData()
	const { state } = useNavigation()

	return (
		<div>
			<Input />
			{state === 'loading' ? <h1>cargando...</h1> : ''}
			<ListOfMovies movies={movies} />
		</div>
	)
}

export async function loader({ request }) {
	const url = new URL(request.url)
	const query = url.searchParams.get('query')
	const movies = await getSearch(query)
	return { movies }
}
