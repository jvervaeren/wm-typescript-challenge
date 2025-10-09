export const SkeletonCard = () => {
	return (
		<div className="bg-white border border-gray-400 rounded-md p-4 h-full">
			<div className="flex flex-col animate-pulse">
				<div className="h-8 rounded bg-gray-300 mb-8"></div>
				<div className="h-6 rounded bg-gray-300 mb-4"></div>
				<div className="h-24 rounded bg-gray-300 mb-6"></div>
				<div className="h-6 rounded bg-gray-300 mb-4"></div>
				<div className="h-24 rounded bg-gray-300"></div>
			</div>
		</div>
	)
}
