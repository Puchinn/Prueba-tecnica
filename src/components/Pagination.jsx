export default function Pagination({ pages, actualPage, setActualPage }) {
	const next = () => {
		if (actualPage + 1 > pages) {
			setActualPage(1)
			return
		}
		setActualPage(actualPage + 1)
	}

	const back = () => {
		if (actualPage - 1 === 0) {
			setActualPage(pages)
			return
		}
		setActualPage(actualPage - 1)
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
