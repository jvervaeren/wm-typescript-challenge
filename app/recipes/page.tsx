'use client'
import { useRef, useState, useEffect } from "react"
import { Searchbox } from "../components/searchbox"
import { AllCocktails } from "../components/allCocktails"
import { SearchSuggestions } from "../components/searchSuggestions"

export default function RecipePage() {
  const searchWrapperRef = useRef<HTMLDivElement>(null)
  const searchInputRef = useRef<HTMLInputElement>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [suggestionsQuery, setSuggestionsQuery] = useState("")
  const [showSuggestions, setShowSuggestions] = useState(false)

  const handleSearch = (val: string) => {
    setSuggestionsQuery("")
    setShowSuggestions(false)
    setSearchQuery(val)
  }

  const handleSuggestionsQuery = (val: string) => {
    setSuggestionsQuery(val)
    setShowSuggestions(val.length >= 3)
  }

  const handleSuggestionClick = (val: string) => {
    if (searchInputRef.current) {
      searchInputRef.current.value = val
      searchInputRef.current?.focus()
      searchInputRef.current?.select()
    }

    setShowSuggestions(false)
    setSuggestionsQuery("")
    setSearchQuery(val)
  }

  const handleClickOutside = (event: MouseEvent) => {
    if (searchWrapperRef.current && !searchWrapperRef.current.contains(event.target as Node)) {
      setShowSuggestions(false)
    }
  }

  const handleEscapeButton = (event: KeyboardEvent) => {
    if (event.key === "Escape") {
      searchInputRef.current?.focus()
      searchInputRef.current?.select()
      setShowSuggestions(false)
      setSuggestionsQuery("")
      setSearchQuery("")
    }
  }

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside)
    return document.addEventListener("mousedown", handleClickOutside)
  }, [])

  useEffect(() => {
    document.addEventListener("keydown", handleEscapeButton)
    return document.addEventListener("keydown", handleEscapeButton)
  }, [])

  return (
    <main>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-5xl text-gray-900 font-bold py-8">All cocktails</h1>
        <div
          ref={searchWrapperRef}
          className="relative"
        >
          <Searchbox
            inputRef={searchInputRef}
            onSearchInputChange={handleSuggestionsQuery}
            onSearchButtonClick={handleSearch}
          />
          {showSuggestions && <SearchSuggestions suggestionsQuery={suggestionsQuery} onSuggestionClick={handleSuggestionClick} />}
        </div>
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-6 pb-12">
        <AllCocktails searchQuery={searchQuery} />
      </ul>
    </main>
  );
}
