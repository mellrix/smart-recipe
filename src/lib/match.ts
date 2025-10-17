import type { Recipe, DietaryTag } from "../types";

export interface MatchOptions {
  availableIngredients: string[]; // normalized lower-case names
  dietaryFilters: DietaryTag[];
  maxTimeMinutes?: number;
  difficulty?: Recipe["difficulty"] | "any";
}

function normalizeName(name: string): string {
  return name.trim().toLowerCase();
}

export function matchScore(recipe: Recipe, options: MatchOptions): number {
  const available = new Set(options.availableIngredients.map(normalizeName));
  let have = 0;
  let total = recipe.ingredients.length;
  for (const ing of recipe.ingredients) {
    const name = normalizeName(ing.name);
    const hasDirect = available.has(name);
    const hasSub = (ing.substitutions || []).some((s) => available.has(normalizeName(s)));
    if (hasDirect || hasSub || ing.optional) have += 1;
  }

  // Simple ratio score
  return have / Math.max(1, total);
}

export function recipePassesFilters(recipe: Recipe, options: MatchOptions): boolean {
  if (options.dietaryFilters.length > 0) {
    // All requested tags must be included in recipe's tags
    const hasAll = options.dietaryFilters.every((t) => recipe.dietaryTags.includes(t));
    if (!hasAll) return false;
  }
  if (options.maxTimeMinutes && recipe.timeMinutes > options.maxTimeMinutes) return false;
  if (options.difficulty && options.difficulty !== "any" && recipe.difficulty !== options.difficulty)
    return false;
  return true;
}

export function findBestMatches(
  recipes: Recipe[],
  options: MatchOptions,
  minScore = 0.3
): { recipe: Recipe; score: number }[] {
  return recipes
    .filter((r) => recipePassesFilters(r, options))
    .map((r) => ({ recipe: r, score: matchScore(r, options) }))
    .filter((x) => x.score >= minScore)
    .sort((a, b) => b.score - a.score);
}

export function scaleIngredients(amount: number, fromServings: number, toServings: number): number {
  return Math.round((amount * toServings * 100) / Math.max(1, fromServings)) / 100;
}


