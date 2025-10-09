interface CardProps {
  name: string
  type: string
  ingredients: string[]
  preparation: string
}

{/* <span className="inline-block rounded bg-gray-900 text-gray-100 text-xs font-light px-2 py-1">
          {type}
          </span> */}

export const Card = ({ name, type, ingredients, preparation }: CardProps) => {
  const ingredientList = ingredients.map(ingredient => <li><span className="text-base text-gray-900">{ingredient}</span></li>)

  return (
    <div className="flex bg-white border border-gray-400 rounded-md p-4 h-full" tabIndex={0}>
      <div className="flex flex-col">
        <div className="pb-4">
          <h2 className="text-2xl text-gray-900 font-bold">{name}</h2>
        </div>
        <div className="pb-4">
          <h3 className="text-xl text-gray-900 font-medium">Ingredients</h3>
          <ul
            className="list-inside list-[square] px-1 text-base overflow-auto min-h-24 max-h-24 pr-1"
            aria-label="Scrollable ingredients list"
            tabIndex={0}
          >
            {ingredientList}
          </ul>
        </div>

        <div>
          <h3 className="text-xl text-gray-900 font-medium">Preparation</h3>
          <p
            className="text-base text-gray-900 overflow-auto min-h-24 max-h-24 pr-1"
            tabIndex={0}
          >
            {preparation}
          </p>
        </div>
      </div>
    </div>
  );
};
