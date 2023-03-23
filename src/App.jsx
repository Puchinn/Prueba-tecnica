import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'

function App() {
	return (
		<div className='App' data-theme='winter'>
			<div className='flex h-screen flex-col bg-base-200'>
				<Nav />
				<Outlet />
			</div>
		</div>
	)
}

export default App
