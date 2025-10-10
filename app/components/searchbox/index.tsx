'use client'
import { useState } from "react"

interface SearchboxProps {
	onSearchButtonClick?: (text: string) => void
}

export const Searchbox = ({ onSearchButtonClick }: SearchboxProps) => {
	const [searchText, setSearchText] = useState("")

	return (
		<div className="flex flex-row items-center">
			<label
				className="text-gray-900 font-medium pr-2"
				htmlFor="search-cocktails"
			>
				Search:&nbsp;
			</label>
			<input
				className="border border-gray-400 rounded-l-md text-gray-900 w-full md:w-auto min-w-[256px] min-h-12 max-h-12 px-2"
				id="search-cocktails"
				name="search-cocktails"
				type="search"
				placeholder=""
				onChange={(el) => setSearchText(el.target.value)}
			/>
			<button
				className="relative bg-white text-gray-900 border border-l-0 border-gray-400 rounded-r-md min-w-12 max-w12 min-h-12 max-h-12"
				type="button"
				onClick={onSearchButtonClick ? () => onSearchButtonClick(searchText) : undefined}
			>
				<svg
					className="absolute top-[50%] left-[50%] transform -translate-x-[50%] -translate-y-[50%]"
					width="27"
					height="27"
					viewBox="0 0 27 27"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
					aria-hidden="true"
					focusable="false"
				>
					<circle cx="12.0161" cy="11.0161" r="8.51613" stroke="currentColor" strokeWidth="3"></circle>
					<line x1="17.8668" y1="17.3587" x2="26.4475" y2="25.9393" stroke="currentColor" strokeWidth="3"></line>
				</svg>
				<span className="sr-only">Search cocktails</span>
			</button>
		</div>
	)
}
