import { useEffect, useState } from "react";
import type { Recipe } from "../types";
import { suggestSubstitutions } from "../lib/substitutions";
import { getRating } from "../lib/storage";

interface Props {
  recipe: Recipe;
  score?: number;
  onRate?: (recipeId: string, rating: number) => void;
  onFavorite?: (recipeId: string, fav: boolean) => void;
}

export function RecipeCard({ recipe, score, onRate, onFavorite }: Props) {
  const [servings, setServings] = useState(1);
  const [rating, setRating] = useState(0);
  const [fav, setFav] = useState(false);

  useEffect(() => {
    const persisted = getRating(recipe.id);
    if (persisted?.rating) setRating(persisted.rating);
    if (typeof persisted?.favorite === "boolean") setFav(persisted.favorite);
  }, [recipe.id]);

  function handleRate(r: number) {
    setRating(r);
    onRate?.(recipe.id, r);
  }

  function toggleFav() {
    const next = !fav;
    setFav(next);
    onFavorite?.(recipe.id, next);
  }

  return (
    <div className="recipe-card">
      <div className="header">
        <h3>{recipe.title}</h3>
        {typeof score === "number" && <span className="score">{Math.round(score * 100)}%</span>}
      </div>
      <div className="meta">
        <span>{recipe.cuisine}</span>
        <span>• {recipe.difficulty}</span>
        <span>• {recipe.timeMinutes} min</span>
        <span>• {recipe.dietaryTags.join(", ")}</span>
      </div>
      <div className="ingredients">
        <strong>Ingredients (per serving)</strong>
        <ul>
          {recipe.ingredients.map((ing) => {
            const subs = suggestSubstitutions([ing.name])[ing.name] || ing.substitutions || [];
            return (
              <li key={ing.name}>
                {ing.name} — {ing.amount} {ing.unit}
                {ing.optional ? " (optional)" : ""}
                {subs.length > 0 && (
                  <span> (subs: {subs.join(", ")})</span>
                )}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="steps">
        <strong>Steps</strong>
        <ol>
          {recipe.steps.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ol>
      </div>
      <div className="nutrition">
        <strong>Nutrition (per serving)</strong>
        <div className="row">
          <span>{recipe.nutritionPerServing.calories} kcal</span>
          <span>Protein {recipe.nutritionPerServing.protein}g</span>
          <span>Fat {recipe.nutritionPerServing.fat}g</span>
          <span>Carbs {recipe.nutritionPerServing.carbs}g</span>
        </div>
      </div>
      <div className="actions">
        <label>Servings</label>
        <input
          type="number"
          min={1}
          value={servings}
          onChange={(e) => setServings(Math.max(1, Number(e.target.value)))}
        />
        <button onClick={toggleFav} className={fav ? "fav active" : "fav"} type="button">
          {fav ? "★ Favorited" : "☆ Favorite"}
        </button>
        <div className="stars">
          {[1, 2, 3, 4, 5].map((s) => (
            <button
              key={s}
              className={rating >= s ? "star active" : "star"}
              onClick={() => handleRate(s)}
              type="button"
            >
              ★
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}


