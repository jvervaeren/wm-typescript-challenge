'use client'
import useSWR from 'swr'
import { Cocktail, CocktailApiResponse } from '@/app/types/types'
import { CocktailSchema } from '@/app/schemas/cocktailApi'
import { Card } from '../card'

interface FetchCocktailsWrapperProps {
	endpoint: string
}

const fetchAndParseCocktails = (url: string) => fetch(url)
	.then(resp => resp.json())
	.then((cocktails: CocktailApiResponse[]) => {
		return cocktails.reduce((parsedCocktails, data) => {
			const parsedCocktail = CocktailSchema.safeParse(data)
			if (!parsedCocktail.success) {
				return parsedCocktails
			}

			return [
				...parsedCocktails,
				parsedCocktail.data
			]
		}, [] as Cocktail[])
	})

export const FetchCocktailsWrapper = ({ endpoint }: FetchCocktailsWrapperProps) => {
	const { data, isLoading } = useSWR(`http://localhost:3000/api${endpoint}`, fetchAndParseCocktails)

	if (isLoading) return "Loading..."
	if (!data) return "No data"

	return (
		<>
			{data.map((c, idx) =>
				<li key={idx}>
					<Card
						name={c.name}
						type={c.category}
						ingredients={c.ingredients}
						preparation={c.preparation}
					/>
				</li>
			)}
		</>
	)
}