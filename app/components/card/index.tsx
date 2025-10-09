import { Ingredients } from "./ingredients"
import { Preparation } from "./preparation"

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
  return (
    <div className="flex bg-white border border-gray-400 rounded-md p-4 h-full" tabIndex={0}>
      <div className="flex flex-col">
        <div className="pb-4">
          <h2 className="text-2xl text-gray-900 font-bold">{name}</h2>
        </div>
        <Ingredients ingredients={ingredients} />
        <Preparation preparation={preparation} />
      </div>
    </div>
  );
};
