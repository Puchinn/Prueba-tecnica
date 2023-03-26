export default function Pagination({ pages, actualPage, setActualPage }) {
	const next = () => {
		const nextPage = actualPage + 1 > pages ? 1 : actualPage + 1
		setActualPage(nextPage)
	}

	const back = () => {
		const lastPage = actualPage - 1 === 0 ? pages : actualPage - 1
		setActualPage(lastPage)
	}

	return (
		<div className='flex justify-center py-5'>
			<div className='btn-group grid grid-cols-2'>
				<button onClick={back} className='btn-outline btn'>
					Previous page
				</button>
				<button onClick={next} className='btn-outline btn'>
					Next
				</button>
			</div>
		</div>
	)
}
