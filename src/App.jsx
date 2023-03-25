import { Outlet } from 'react-router-dom'
import Nav from './components/Nav'
import Footer from './components/Footer'

function App() {
	return (
		<div className='App' data-theme='winter'>
			<div className='min-h-[80vh]'>
				<Nav />
				<Outlet />
			</div>
			<Footer />
		</div>
	)
}

export default App
