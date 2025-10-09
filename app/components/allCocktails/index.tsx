import { FetchCocktailsWrapper } from '../fetchCocktailsWrapper'
import { SkeletonCard } from '../skeletonCard'

export const AllCocktails = () => {
	const skeletonLoader = [...Array(8)].map((_, idx) => <li key={idx}><SkeletonCard /></li>)

	return (
		<FetchCocktailsWrapper
			endpoint="/cocktails"
			loadingSkeleton={skeletonLoader}
		/>
	)
}
