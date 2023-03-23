import Input from '../components/Input'
import Hero from '../components/Hero'
import { useNavigation } from 'react-router-dom'

export default function Inicio() {
	const { state } = useNavigation()
	return (
		<>
			<Hero />
			<Input />
			{state === 'loading' ? <h1>cargando...</h1> : ''}
		</>
	)
}
