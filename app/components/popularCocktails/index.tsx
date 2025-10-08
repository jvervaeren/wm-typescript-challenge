import { FetchCocktailsWrapper } from '../fetchCocktailsWrapper'

export const PopularCocktails = () => {
    return <FetchCocktailsWrapper endpoint="/cocktails/popular" />
}
