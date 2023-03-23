import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from '../App'
import Inicio from '../pages/Inicio'
import Resultados, { loader as resultadosLoader } from '../pages/Resultados'

const router = createBrowserRouter([
	{
		path: '/',
		element: <App />,
		children: [
			{
				index: true,
				element: <Inicio />,
			},
			{
				path: 'resultados',
				element: <Resultados />,
				loader: resultadosLoader,
			},
		],
	},
])

export default function Router() {
	return <RouterProvider router={router} />
}
