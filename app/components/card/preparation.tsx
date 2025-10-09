import { useRef, useState, useEffect } from "react"

interface PreparationProps {
	preparation: string
}

export const Preparation = ({ preparation }: PreparationProps) => {
	const paragraphRef = useRef<HTMLParagraphElement>(null)
	const [textTabbable, setTextTabbable] = useState(false)

	useEffect(() => {
		if (!paragraphRef.current) return

		setTextTabbable(paragraphRef.current.scrollHeight > paragraphRef.current.clientHeight)
	}, [])

	return (
		<div>
			<h3 className="text-xl text-gray-900 font-medium">Preparation</h3>
			<p
				ref={paragraphRef}
				className="text-base text-gray-900 overflow-auto min-h-24 max-h-24 pr-1"
				tabIndex={textTabbable ? 0 : -1}
			>
				{preparation}
			</p>
		</div>
	)
}
