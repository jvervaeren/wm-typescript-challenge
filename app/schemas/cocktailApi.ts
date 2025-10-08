import * as z from "zod"

const GlassEnum = z.enum([
	"martini",
	"old-fashioned",
	"highball",
	"collins",
	"margarita",
	"champagne-flute",
	"champagne-tulip",
	"hurricane",
	"shot",
	"hot-drink",
	"white-wine"
])

const UnitEnum = z.enum([
	"cl",
	"ml",
	"dash",
	"bar spoon",
	"teaspoon"
]);

const MeasuredIngredientSchema = z.object({
	unit: UnitEnum,
	amount: z.number().positive(),
	ingredient: z.string(),
	label: z.string().optional()
})

const SpecialIngredientSchema = z.object({
	special: z.string()
})

const IngredientSchema = z.union([
	MeasuredIngredientSchema, SpecialIngredientSchema
])

const ParsedIngredientsSchema = z.array(IngredientSchema).min(1).transform(ingredients => {
	return ingredients.map((ingredient) => {
		if ("special" in ingredient) return ingredient.special;
		return `${ingredient.amount} ${ingredient.unit} ${ingredient.ingredient}`;
	})
})

export const CocktailApiResponseSchema = z.object({
	name: z.string(),
	glass: GlassEnum,
	category: z.string().optional(),
	ingredients: IngredientSchema,
	garnish: z.string().optional(),
	preparation: z.string()
})

export const CocktailSchema = z.object({
	name: z.string(),
	glass: GlassEnum,
	category: z.string(),
	ingredients: ParsedIngredientsSchema,
	garnish: z.string().optional(),
	preparation: z.string()
})
