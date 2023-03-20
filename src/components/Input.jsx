import useInput from '../hooks/useInput'

function Input({ searchMovies }) {
	const { value, setValue } = useInput()

	const handleChange = (event) => {
		const search = event.target.value
		setValue(search)
	}

	const onSubmit = (event) => {
		event.preventDefault()
		searchMovies(value)
	}

	return (
		<form
			onSubmit={onSubmit}
			action='#'
			className='form-control flex flex-row items-center justify-center gap-x-5 p-5'>
			<input
				onChange={handleChange}
				value={value}
				name='query'
				className='input-bordered input w-96'
				placeholder='Buscar pelicula...'
			/>
			<button className='btn-primary btn text-white'>Buscar</button>
		</form>
	)
}

export default Input
