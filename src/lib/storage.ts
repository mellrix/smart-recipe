export interface StoredRating {
  rating: number;
  favorite?: boolean;
}

const KEY = "smart_recipe_ratings_v1";

function readAll(): Record<string, StoredRating> {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : {};
  } catch {
    return {};
  }
}

function writeAll(data: Record<string, StoredRating>) {
  try {
    localStorage.setItem(KEY, JSON.stringify(data));
  } catch {}
}

export function setRating(recipeId: string, rating: number) {
  const all = readAll();
  all[recipeId] = { ...(all[recipeId] || {}), rating };
  writeAll(all);
}

export function setFavorite(recipeId: string, favorite: boolean) {
  const all = readAll();
  all[recipeId] = { ...(all[recipeId] || {}), favorite };
  writeAll(all);
}

export function getRating(recipeId: string): StoredRating | undefined {
  const all = readAll();
  return all[recipeId];
}

export function getFavorites(): string[] {
  const all = readAll();
  return Object.entries(all)
    .filter(([, v]) => v.favorite)
    .map(([id]) => id);
}


