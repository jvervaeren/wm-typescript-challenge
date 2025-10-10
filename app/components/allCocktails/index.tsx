import { FetchCocktailsWrapper } from '../fetchCocktailsWrapper'
import { SkeletonCard } from '../skeletonCard'

interface AllCocktailsProps {
	searchQuery?: string
}

export const AllCocktails = ({ searchQuery }: AllCocktailsProps) => {
	const query = searchQuery ? `?q=${searchQuery}` : ''
	const skeletonLoader = [...Array(8)].map((_, idx) => <li key={idx}><SkeletonCard /></li>)

	return (
		<FetchCocktailsWrapper
			endpoint={`/cocktails${query}`}
			loadingSkeleton={skeletonLoader}
		/>
	)
}
