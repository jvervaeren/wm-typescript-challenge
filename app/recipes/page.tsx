import { AllCocktails } from "../components/allCocktails"

export default function RecipePage() {
  return (
    <main>
      <h1 className="text-5xl text-gray-900 font-bold py-8">All cocktails</h1>
      <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 py-6 pb-12">
        <AllCocktails />
      </ul>
    </main>
  );
}
