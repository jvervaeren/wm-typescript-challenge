'use client'
import useSWR from 'swr'
import { Card } from '../card'

const fetchCocktails = (url: string) => fetch(url)
	.then(resp => resp.json())
	.then((cocktails: any[]) => {
		return cocktails.map(c => {
			return {
				name: c.name,
				type: c.category,
				ingredients: c.ingredients.map((ing: any) => {
					if (ing.special) return ing.special
					return `${ing.amount} ${ing.unit} ${ing.ingredient}`
				}),
				preparation: c.preparation
			}
		})
	})

interface cProps { }

export const CocktailList = ({ }: cProps) => {
	const { data, isLoading } = useSWR("http://localhost:3000/api/cocktails", fetchCocktails, {
		suspense: true,
		fallbackData: []
	})

	if (isLoading) return "Loading..."

	return (
		<ul>
			{data.map((c, idx) =>
				<li key={idx}>
					<Card
						name={c.name}
						type={c.type}
						ingredients={c.ingredients}
						preparation={c.preparation}
					/>
				</li>
			)}
		</ul>
	)
}