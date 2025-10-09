import { FetchCocktailsWrapper } from '../fetchCocktailsWrapper'
import { SkeletonCard } from '../skeletonCard'

export const PopularCocktails = () => {
	const skeletonLoader = [...Array(5)].map((_, idx) => <li key={idx}><SkeletonCard /></li>)

	return (
		<FetchCocktailsWrapper
			endpoint="/cocktails/popular"
			loadingSkeleton={skeletonLoader}
		/>
	)
}
