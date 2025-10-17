import { useMemo, useState } from 'react'
import './App.css'
import { IngredientInput } from './components/IngredientInput'
import { ImageRecognizer } from './components/ImageRecognizer'
import { RECIPES } from './data/recipes'
import { findBestMatches } from './lib/match'
import type { DietaryTag } from './types'
import { RecipeCard } from './components/RecipeCard'
import { setFavorite, setRating } from './lib/storage'

function App() {
  const [ingredients, setIngredients] = useState<string[]>([])
  const [dietary, setDietary] = useState<DietaryTag[]>([])
  const [maxTime, setMaxTime] = useState<number | undefined>(undefined)
  const [difficulty, setDifficulty] = useState<'easy' | 'medium' | 'hard' | 'any'>('any')

  const matches = useMemo(() => {
    return findBestMatches(RECIPES, {
      availableIngredients: ingredients,
      dietaryFilters: dietary,
      maxTimeMinutes: maxTime,
      difficulty
    }, 0.2)
  }, [ingredients, dietary, maxTime, difficulty])

  return (
    <div className="container">
      <header>
        <h1>Smart Recipe Generator</h1>
      </header>
      <IngredientInput
        onChange={({ ingredients, dietary, maxTimeMinutes, difficulty }) => {
          setIngredients(ingredients)
          setDietary(dietary)
          setMaxTime(maxTimeMinutes)
          setDifficulty(difficulty)
        }}
      />
      <ImageRecognizer onDetect={(labels) => setIngredients((prev) => Array.from(new Set([...prev, ...labels])))} />
      <main>
        {matches.length === 0 ? (
          <p className="empty">Enter ingredients to see matching recipes.</p>
        ) : (
          <div className="grid">
            {matches.map(({ recipe, score }) => (
              <RecipeCard
                key={recipe.id}
                recipe={recipe}
                score={score}
                onRate={(id, r) => setRating(id, r)}
                onFavorite={(id, f) => setFavorite(id, f)}
              />
            ))}
          </div>
        )}
      </main>
      <footer>
        <small>Demo build for assessment</small>
      </footer>
    </div>
  )
}

export default App
