import { AllCocktails } from "../components/allCocktails"
import { Searchbox } from "../components/searchbox";

export default function RecipePage() {
  return (
    <main>
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <h1 className="text-5xl text-gray-900 font-bold py-8">All cocktails</h1>
        <Searchbox />
      </div>

      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-6 pb-12">
        <AllCocktails />
      </ul>
    </main>
  );
}
