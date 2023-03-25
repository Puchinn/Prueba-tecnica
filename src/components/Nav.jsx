import { Link } from 'react-router-dom'
import Btndarkmode from './Btndarkmode'

function Nav() {
	return (
		<div className='navbar flex items-center justify-center bg-primary-content p-3 px-20'>
			<div className='w-full max-w-5xl'>
				<Link to='/' className='btn-ghost btn bg-slate-100 text-xl normal-case'>
					Donde lo veo.com
				</Link>
				<nav className=''>
					<ul className='menu menu-horizontal px-1'>
						<li>
							<Link to='/'>Inicio</Link>
						</li>
						<li>
							<Link>Peliculas</Link>
						</li>
						<li>
							<Link>Series</Link>
						</li>
					</ul>
				</nav>
				<Btndarkmode />
			</div>
		</div>
	)
}

export default Nav
