'use client'
import { useState } from "react"
import { Searchbox } from "../components/searchbox"
import { AllCocktails } from "../components/allCocktails"

export default function RecipePage() {
  const [searchQuery, setSearchQuery] = useState("")

  const handleSearch = (val: string) => {
    setSearchQuery(val)
  }

  return (
    <main>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-5xl text-gray-900 font-bold py-8">All cocktails</h1>
        <Searchbox onSearchButtonClick={handleSearch} />
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-6 pb-12">
        <AllCocktails searchQuery={searchQuery} />
      </ul>
    </main>
  );
}
