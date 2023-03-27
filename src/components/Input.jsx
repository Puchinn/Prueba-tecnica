import useInput from '../hooks/useInput'
import { Form } from 'react-router-dom'

export default function Input() {
	const { value, setValue, error } = useInput()

	const handleChange = (event) => {
		const search = event.target.value
		setValue(search)
	}

	return (
		<Form
			action='/resultados'
			className='form-control relative flex flex-row  justify-center gap-x-5 p-5'>
			<div>
				<input
					type='search'
					required
					onChange={handleChange}
					value={value}
					name='query'
					className='input-bordered input w-96'
					placeholder='Buscar pelicula...'
				/>
				{error && <p className='absolute mt-2 ml-2 text-sm text-red-500'>{error}</p>}
			</div>
			<button className='btn-primary btn text-white'>Buscar</button>
		</Form>
	)
}
