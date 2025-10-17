export type DietaryTag =
  | "vegetarian"
  | "vegan"
  | "gluten-free"
  | "dairy-free"
  | "nut-free"
  | "keto"
  | "paleo";

export type Difficulty = "easy" | "medium" | "hard";

export interface NutritionInfo {
  calories: number; // kcal per serving
  protein: number; // g per serving
  fat: number; // g per serving
  carbs: number; // g per serving
}

export interface RecipeIngredient {
  name: string;
  amount: number; // amount per serving in unit below
  unit: string; // e.g. g, ml, piece
  optional?: boolean;
  substitutions?: string[]; // simple substitution names
}

export interface Recipe {
  id: string;
  title: string;
  cuisine: string;
  difficulty: Difficulty;
  timeMinutes: number;
  dietaryTags: DietaryTag[];
  ingredients: RecipeIngredient[];
  steps: string[];
  nutritionPerServing: NutritionInfo;
  image?: string; // local asset path or URL
}

export interface UserPreferences {
  dietaryTags: DietaryTag[];
  maxTimeMinutes?: number;
  difficulty?: Difficulty | "any";
}

export interface RatedRecipe {
  recipeId: string;
  rating: number; // 1..5
  favorite?: boolean;
}


