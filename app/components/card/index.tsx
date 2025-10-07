interface CardProps {
  name: string
  type: string
  ingredients: NonEmptyStringArray
  preparation: string
}

export const Card = ({ name, type, ingredients, preparation }: CardProps) => {
  const ingredientList = ingredients.map(ingredient => <li>{ingredient}</li>)

  return (
    <div className="flex border border-gray-200 bg-white/50 p-4">
      <div className="block space-y-2">
        <h2 className="text-2xl font-bold">{name}</h2>
        <span className="mr-1 inline-block rounded bg-pink-200 px-2 py-1 text-xs font-semibold uppercase text-pink-600 last:mr-0">
          {type}
        </span>

        <h3 className="text-lg font-bold">Ingredients</h3>
        <ul className="list-inside list-disc px-1 text-sm">
          {ingredientList}
        </ul>

        <h3 className="text-lg font-bold">Preparation</h3>
        <div className="text-sm">
          {preparation}
        </div>
      </div>
    </div>
  );
};
