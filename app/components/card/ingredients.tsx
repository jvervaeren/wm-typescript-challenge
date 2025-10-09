import { useRef, useState, useEffect } from "react"

interface IngredientsProps {
	ingredients: string[]
}

export const Ingredients = ({ ingredients }: IngredientsProps) => {
	const uListRef = useRef<HTMLUListElement>(null)
	const [listTabbable, setListTabbable] = useState(false)

	useEffect(() => {
		if (!uListRef.current) return

		setListTabbable(uListRef.current.scrollHeight > uListRef.current.clientHeight)
	}, [])

	const ingredientList = ingredients.map((ingredient, idx) => <li key={idx}><span className="text-base text-gray-900">{ingredient}</span></li>)

	return (
		<div className="pb-4">
			<h3 className="text-xl text-gray-900 font-medium">Ingredients</h3>
			<ul
				ref={uListRef}
				className="list-inside list-[square] px-1 text-base overflow-auto min-h-24 max-h-24 pr-1"
				aria-label="Scrollable ingredients list"
				tabIndex={listTabbable ? 0 : -1}
			>
				{ingredientList}
			</ul>
		</div>
	)
}
