import * as z from "zod"
import { CocktailApiResponseSchema, CocktailSchema } from '../schemas/cocktailApi'

export type Cocktail = z.infer<typeof CocktailSchema>
export type CocktailApiResponse = z.infer<typeof CocktailApiResponseSchema>
