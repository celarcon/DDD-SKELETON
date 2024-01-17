import { useEffect, useRef, useState } from 'react'

export const useNearScreen = () => {
	const [isNearScreen, setShow] = useState(false)
	const fromRef = useRef()
	useEffect(() => {
		const onchange = entries => {
			const el = entries[0]
			if (el.isIntersecting) {
				setShow(true)
			} else {
				setShow(false)
			}
		}
		const observer = new IntersectionObserver(onchange, {
			rootMargin: '100px',
		})

		observer.observe(fromRef.current)

		return () => observer.disconnect()
	})

	return { isNearScreen, fromRef }
}
