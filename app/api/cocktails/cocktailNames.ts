import cocktails from "./cocktails.json"

export const cocktailNames = cocktails.reduce((nameArr, value) => {
  if (!value.category) return nameArr

  return [
    ...nameArr,
    value.name
  ]
}, [] as string[])
