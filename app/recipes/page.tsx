import { AllCocktails } from "../components/allCocktails"

export default function RecipePage() {
  return (
    <main>
      <ul className="grid grid-cols-1 auto-rows-max gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <AllCocktails />
      </ul>
    </main>
  );
}
