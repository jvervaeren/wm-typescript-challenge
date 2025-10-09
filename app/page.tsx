import { PopularCocktails } from "./components/popularCocktails"

export default function Home() {
  return (
    <main>
      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-12">
        <div className="col-span-1">
          <h1 className="text-5xl text-gray-900 font-bold py-8">Welcome!</h1>
          <p className="text-base text-gray-900 pb-6">
            Welcome to Wieni's cocktail application. A database of all of your colleagues favourite cocktails. We hope you enjoy em as much as we do.
          </p>
          <p className="text-base text-gray-900">On this page, you can already find five of our highest ranked cocktails between colleagues.</p>
        </div>
        <div className="col-span-2">
          <ul className="grid grid-cols-1 gap-4 py-8 sm:grid-cols-2 lg:grid-cols-3">
            <PopularCocktails />
          </ul>
        </div>
      </div>
    </main>
  )
}
