import { cocktailNames } from "../cocktailNames"

export async function GET(request: Request) {
  const url = new URL(request.url)
  const query = url.searchParams.get("q")

  let parsedCocktailNames: string
  if (query && query.length >= 3) {
    const queryRegex = new RegExp(query, "i")
    const suggestions = cocktailNames.reduce((newArr, name) => {
      if (queryRegex.test(name)) {
        return [
          ...newArr,
          name
        ]
      }

      return newArr
    }, [] as string[])

    parsedCocktailNames = JSON.stringify(suggestions.slice(0, 5))
  } else {
    parsedCocktailNames = JSON.stringify(cocktailNames)
  }

  await new Promise((resolve) => setTimeout(resolve, 333));

  return new Response(parsedCocktailNames);
}
