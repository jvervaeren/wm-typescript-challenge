import { KeyboardEventHandler } from "react"
import useSWR from "swr"

const fetchSuggestions = (url: string) => fetch(url)
  .then(resp => resp.json() as Promise<string[]>)

const accessibilityStyles = "cursor-pointer focus:bg-white focus:text-gray-900 focus:decoration-gray-900 focus-visible:bg-white focus-visible:text-gray-900 focus-visible:decoration-gray-900 hover:bg-white hover:text-gray-900 hover:decoration-gray-900"

interface SearchSuggestionsProps {
  suggestionsQuery?: string
  onSuggestionClick: (value: string) => void
}

export const SearchSuggestions = ({ suggestionsQuery, onSuggestionClick }: SearchSuggestionsProps) => {
  const { data, isLoading } = useSWR(`http://localhost:3000/api/cocktails/suggestions?q=${suggestionsQuery}`, fetchSuggestions)

  const handleKeyUp = (key: string, suggestion: string) => {
    if (key === "Enter") {
      onSuggestionClick(suggestion)
    }
  }

  if (isLoading) return null
  if (!data) return null

  return (
    <ul
      className="bg-gray-900 absolute top-full left-0 w-full divide-y divide-gray-400 border border-t-0 border-gray-400 rounded-b-md"
    >
      {data.map((suggestion, idx) => {
        return (
          <li
            className={`text-base text-gray-50 p-2 underline underline-offset-2 decoration-gray-50 ${accessibilityStyles}`}
            key={idx}
            tabIndex={0}
            onKeyUp={(ev) => handleKeyUp(ev.key, suggestion)}
            onClick={() => onSuggestionClick(suggestion)}
          >
            <span>{suggestion}</span>
          </li>
        )
      })}
    </ul >
  )
}
