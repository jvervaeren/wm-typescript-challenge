import cocktails from "./cocktails.json";

export async function GET(request: Request) {
  const url = new URL(request.url)
  const query = url.searchParams.get("q")

  let parsedCocktails: string
  if (query) {
    const queryRegex = new RegExp(query, "i")
    const cocktailsQueried = cocktails.reduce((newArr, currentValue) => {
      if (queryRegex.test(currentValue.name)) {
        return [
          ...newArr,
          currentValue
        ]
      }

      return newArr
    }, [] as any[])

    parsedCocktails = JSON.stringify(cocktailsQueried)
  } else {
    parsedCocktails = JSON.stringify(cocktails)
  }

  await new Promise((resolve) => setTimeout(resolve, 333));

  return new Response(parsedCocktails);
}
