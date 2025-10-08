import { FetchCocktailsWrapper } from '../fetchCocktailsWrapper'

export const AllCocktails = () => {
	return <FetchCocktailsWrapper endpoint="/cocktails" />
}
