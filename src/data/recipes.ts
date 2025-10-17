import type { Recipe } from "../types";

// Minimal image placeholders can be added later; keep URLs empty for now
export const RECIPES: Recipe[] = [
  {
    id: "margherita-pizza",
    title: "Margherita Pizza",
    cuisine: "Italian",
    difficulty: "medium",
    timeMinutes: 30,
    dietaryTags: ["vegetarian"],
    ingredients: [
      { name: "pizza dough", amount: 1, unit: "piece" },
      { name: "tomato sauce", amount: 120, unit: "g" },
      { name: "mozzarella", amount: 120, unit: "g", substitutions: ["vegan cheese"] },
      { name: "basil", amount: 6, unit: "leaves", optional: true },
      { name: "olive oil", amount: 1, unit: "tbsp" },
      { name: "salt", amount: 0.5, unit: "tsp" }
    ],
    steps: [
      "Preheat oven to 250°C (480°F).",
      "Spread sauce on dough, top with mozzarella and basil.",
      "Drizzle olive oil and bake 8–12 minutes until crust is golden."
    ],
    nutritionPerServing: { calories: 520, protein: 22, fat: 18, carbs: 68 }
  },
  {
    id: "veggie-stir-fry",
    title: "Veggie Stir Fry",
    cuisine: "Asian",
    difficulty: "easy",
    timeMinutes: 20,
    dietaryTags: ["vegan", "gluten-free"],
    ingredients: [
      { name: "broccoli", amount: 150, unit: "g" },
      { name: "bell pepper", amount: 1, unit: "piece" },
      { name: "carrot", amount: 1, unit: "piece" },
      { name: "soy sauce", amount: 2, unit: "tbsp", substitutions: ["tamari"] },
      { name: "garlic", amount: 2, unit: "cloves" },
      { name: "ginger", amount: 1, unit: "tsp" }
    ],
    steps: [
      "Stir-fry vegetables in a hot pan with oil.",
      "Add garlic, ginger, and soy sauce; cook 2–3 minutes.",
      "Serve with rice or noodles."
    ],
    nutritionPerServing: { calories: 220, protein: 8, fat: 6, carbs: 34 }
  },
  {
    id: "chicken-curry",
    title: "Chicken Curry",
    cuisine: "Indian",
    difficulty: "medium",
    timeMinutes: 40,
    dietaryTags: [],
    ingredients: [
      { name: "chicken", amount: 300, unit: "g", substitutions: ["tofu"] },
      { name: "onion", amount: 1, unit: "piece" },
      { name: "tomato", amount: 2, unit: "piece" },
      { name: "curry powder", amount: 1, unit: "tbsp" },
      { name: "coconut milk", amount: 200, unit: "ml" }
    ],
    steps: [
      "Sauté onion; add chicken and brown.",
      "Add tomatoes, curry powder, coconut milk; simmer 20 minutes.",
      "Season and serve with rice."
    ],
    nutritionPerServing: { calories: 480, protein: 35, fat: 28, carbs: 18 }
  },
  {
    id: "avocado-toast",
    title: "Avocado Toast",
    cuisine: "American",
    difficulty: "easy",
    timeMinutes: 10,
    dietaryTags: ["vegetarian"],
    ingredients: [
      { name: "bread", amount: 2, unit: "slices" },
      { name: "avocado", amount: 1, unit: "piece" },
      { name: "lemon", amount: 0.25, unit: "piece", optional: true },
      { name: "salt", amount: 0.25, unit: "tsp" }
    ],
    steps: [
      "Toast bread.",
      "Mash avocado with lemon and salt; spread on toast.",
      "Top as desired."
    ],
    nutritionPerServing: { calories: 320, protein: 8, fat: 18, carbs: 32 }
  },
  {
    id: "lentil-soup",
    title: "Lentil Soup",
    cuisine: "Middle Eastern",
    difficulty: "easy",
    timeMinutes: 35,
    dietaryTags: ["vegan", "gluten-free"],
    ingredients: [
      { name: "red lentils", amount: 180, unit: "g" },
      { name: "onion", amount: 1, unit: "piece" },
      { name: "carrot", amount: 1, unit: "piece" },
      { name: "cumin", amount: 1, unit: "tsp" },
      { name: "vegetable broth", amount: 800, unit: "ml" }
    ],
    steps: [
      "Sauté onion and carrot.",
      "Add lentils, broth, cumin; simmer 20–25 minutes.",
      "Season and serve."
    ],
    nutritionPerServing: { calories: 360, protein: 22, fat: 4, carbs: 58 }
  },
  // Additional recipes to reach 20+
  { id: "pancakes", title: "Pancakes", cuisine: "American", difficulty: "easy", timeMinutes: 20, dietaryTags: ["vegetarian"], ingredients: [ { name: "flour", amount: 120, unit: "g" }, { name: "milk", amount: 240, unit: "ml", substitutions: ["oat milk"] }, { name: "egg", amount: 1, unit: "piece", substitutions: ["banana"] }, { name: "baking powder", amount: 1, unit: "tsp" }, { name: "sugar", amount: 1, unit: "tbsp" } ], steps: ["Mix ingredients into batter.", "Cook on greased pan until golden."], nutritionPerServing: { calories: 380, protein: 10, fat: 8, carbs: 66 } },
  { id: "beef-tacos", title: "Beef Tacos", cuisine: "Mexican", difficulty: "easy", timeMinutes: 25, dietaryTags: [], ingredients: [ { name: "tortillas", amount: 4, unit: "piece" }, { name: "ground beef", amount: 250, unit: "g", substitutions: ["black beans"] }, { name: "onion", amount: 0.5, unit: "piece" }, { name: "lettuce", amount: 4, unit: "leaves" }, { name: "tomato", amount: 1, unit: "piece" } ], steps: ["Cook beef with onion.", "Warm tortillas and assemble with toppings."], nutritionPerServing: { calories: 520, protein: 28, fat: 24, carbs: 48 } },
  { id: "tofu-scramble", title: "Tofu Scramble", cuisine: "American", difficulty: "easy", timeMinutes: 15, dietaryTags: ["vegan", "gluten-free"], ingredients: [ { name: "tofu", amount: 200, unit: "g" }, { name: "turmeric", amount: 0.5, unit: "tsp" }, { name: "spinach", amount: 60, unit: "g" }, { name: "onion", amount: 0.5, unit: "piece" } ], steps: ["Sauté onion.", "Crumble tofu with turmeric; cook 5–7 minutes.", "Add spinach to wilt."], nutritionPerServing: { calories: 220, protein: 18, fat: 12, carbs: 8 } },
  { id: "quinoa-salad", title: "Quinoa Salad", cuisine: "Mediterranean", difficulty: "easy", timeMinutes: 20, dietaryTags: ["vegan", "gluten-free"], ingredients: [ { name: "quinoa", amount: 100, unit: "g" }, { name: "cucumber", amount: 0.5, unit: "piece" }, { name: "tomato", amount: 1, unit: "piece" }, { name: "olive oil", amount: 1, unit: "tbsp" }, { name: "lemon", amount: 0.5, unit: "piece" } ], steps: ["Cook quinoa.", "Chop veggies and toss with oil and lemon."], nutritionPerServing: { calories: 320, protein: 10, fat: 10, carbs: 46 } },
  { id: "baked-salmon", title: "Baked Salmon", cuisine: "International", difficulty: "easy", timeMinutes: 25, dietaryTags: ["keto", "gluten-free"], ingredients: [ { name: "salmon", amount: 200, unit: "g" }, { name: "lemon", amount: 0.5, unit: "piece" }, { name: "garlic", amount: 2, unit: "cloves" } ], steps: ["Season salmon.", "Bake at 200°C for 12–15 minutes."], nutritionPerServing: { calories: 420, protein: 34, fat: 28, carbs: 2 } },
  { id: "caprese-salad", title: "Caprese Salad", cuisine: "Italian", difficulty: "easy", timeMinutes: 10, dietaryTags: ["vegetarian", "gluten-free"], ingredients: [ { name: "tomato", amount: 2, unit: "piece" }, { name: "mozzarella", amount: 120, unit: "g" }, { name: "basil", amount: 6, unit: "leaves" }, { name: "olive oil", amount: 1, unit: "tbsp" } ], steps: ["Slice and arrange ingredients.", "Drizzle olive oil and season."], nutritionPerServing: { calories: 300, protein: 16, fat: 20, carbs: 8 } },
  { id: "shakshuka", title: "Shakshuka", cuisine: "Middle Eastern", difficulty: "medium", timeMinutes: 30, dietaryTags: ["vegetarian", "gluten-free"], ingredients: [ { name: "egg", amount: 2, unit: "piece" }, { name: "tomato", amount: 3, unit: "piece" }, { name: "onion", amount: 1, unit: "piece" }, { name: "paprika", amount: 1, unit: "tsp" } ], steps: ["Cook onion and tomatoes with spices.", "Poach eggs in sauce."], nutritionPerServing: { calories: 360, protein: 18, fat: 22, carbs: 20 } },
  { id: "vegan-burrito", title: "Vegan Burrito", cuisine: "Mexican", difficulty: "easy", timeMinutes: 25, dietaryTags: ["vegan"], ingredients: [ { name: "tortilla", amount: 1, unit: "piece" }, { name: "rice", amount: 120, unit: "g" }, { name: "black beans", amount: 100, unit: "g" }, { name: "corn", amount: 60, unit: "g" } ], steps: ["Cook rice.", "Assemble burrito with beans and corn."], nutritionPerServing: { calories: 520, protein: 16, fat: 8, carbs: 96 } },
  { id: "caesar-salad", title: "Caesar Salad", cuisine: "American", difficulty: "easy", timeMinutes: 15, dietaryTags: [], ingredients: [ { name: "romaine", amount: 150, unit: "g" }, { name: "croutons", amount: 40, unit: "g" }, { name: "parmesan", amount: 30, unit: "g" } ], steps: ["Toss lettuce with dressing, top with croutons and parmesan."], nutritionPerServing: { calories: 380, protein: 10, fat: 28, carbs: 20 } },
  { id: "spaghetti-bolognese", title: "Spaghetti Bolognese", cuisine: "Italian", difficulty: "medium", timeMinutes: 40, dietaryTags: [], ingredients: [ { name: "spaghetti", amount: 120, unit: "g" }, { name: "ground beef", amount: 200, unit: "g" }, { name: "tomato sauce", amount: 200, unit: "g" }, { name: "onion", amount: 0.5, unit: "piece" } ], steps: ["Cook pasta.", "Simmer sauce with beef and onion."], nutritionPerServing: { calories: 640, protein: 30, fat: 22, carbs: 82 } },
  { id: "miso-soup", title: "Miso Soup", cuisine: "Japanese", difficulty: "easy", timeMinutes: 15, dietaryTags: ["vegetarian", "gluten-free"], ingredients: [ { name: "miso", amount: 2, unit: "tbsp" }, { name: "tofu", amount: 80, unit: "g" }, { name: "seaweed", amount: 5, unit: "g" } ], steps: ["Dissolve miso in hot dashi or water.", "Add tofu and seaweed."], nutritionPerServing: { calories: 120, protein: 10, fat: 4, carbs: 12 } },
  { id: "falafel", title: "Falafel", cuisine: "Middle Eastern", difficulty: "hard", timeMinutes: 60, dietaryTags: ["vegan"], ingredients: [ { name: "chickpeas", amount: 200, unit: "g" }, { name: "onion", amount: 0.5, unit: "piece" }, { name: "garlic", amount: 2, unit: "cloves" } ], steps: ["Soak and grind chickpeas with aromatics.", "Form balls and fry/bake."], nutritionPerServing: { calories: 520, protein: 20, fat: 24, carbs: 60 } },
  { id: "pad-thai", title: "Pad Thai", cuisine: "Thai", difficulty: "medium", timeMinutes: 30, dietaryTags: [], ingredients: [ { name: "rice noodles", amount: 120, unit: "g" }, { name: "egg", amount: 1, unit: "piece" }, { name: "shrimp", amount: 150, unit: "g", substitutions: ["tofu"] } ], steps: ["Soak noodles.", "Stir-fry with sauce, egg, and protein."], nutritionPerServing: { calories: 620, protein: 28, fat: 18, carbs: 90 } },
  { id: "greek-salad", title: "Greek Salad", cuisine: "Greek", difficulty: "easy", timeMinutes: 15, dietaryTags: ["vegetarian", "gluten-free"], ingredients: [ { name: "cucumber", amount: 0.5, unit: "piece" }, { name: "tomato", amount: 1, unit: "piece" }, { name: "feta", amount: 80, unit: "g", substitutions: ["tofu feta"] }, { name: "olive", amount: 40, unit: "g" } ], steps: ["Chop and toss with olive oil and oregano."], nutritionPerServing: { calories: 340, protein: 12, fat: 24, carbs: 18 } },
  { id: "pumpkin-soup", title: "Pumpkin Soup", cuisine: "International", difficulty: "easy", timeMinutes: 30, dietaryTags: ["vegetarian", "gluten-free"], ingredients: [ { name: "pumpkin", amount: 300, unit: "g" }, { name: "onion", amount: 0.5, unit: "piece" }, { name: "cream", amount: 60, unit: "ml", substitutions: ["coconut milk"] } ], steps: ["Simmer pumpkin with aromatics; blend until smooth."], nutritionPerServing: { calories: 280, protein: 6, fat: 12, carbs: 36 } },
  { id: "bean-chili", title: "Bean Chili", cuisine: "American", difficulty: "easy", timeMinutes: 40, dietaryTags: ["vegan", "gluten-free"], ingredients: [ { name: "kidney beans", amount: 200, unit: "g" }, { name: "tomato", amount: 2, unit: "piece" }, { name: "onion", amount: 1, unit: "piece" }, { name: "chili powder", amount: 1, unit: "tbsp" } ], steps: ["Simmer beans with tomatoes, onion, and spices."], nutritionPerServing: { calories: 420, protein: 20, fat: 6, carbs: 74 } },
  { id: "omelette", title: "Omelette", cuisine: "French", difficulty: "easy", timeMinutes: 10, dietaryTags: [], ingredients: [ { name: "egg", amount: 2, unit: "piece" }, { name: "milk", amount: 20, unit: "ml" }, { name: "cheese", amount: 30, unit: "g" } ], steps: ["Beat eggs with milk.", "Cook and fold with cheese."], nutritionPerServing: { calories: 300, protein: 18, fat: 22, carbs: 4 } },
  { id: "sushi-bowl", title: "Sushi Bowl", cuisine: "Japanese", difficulty: "medium", timeMinutes: 35, dietaryTags: ["gluten-free"], ingredients: [ { name: "sushi rice", amount: 120, unit: "g" }, { name: "salmon", amount: 120, unit: "g", substitutions: ["tofu"] }, { name: "avocado", amount: 0.5, unit: "piece" } ], steps: ["Cook sushi rice.", "Assemble bowl with toppings."], nutritionPerServing: { calories: 560, protein: 26, fat: 20, carbs: 70 } },
  { id: "ratatouille", title: "Ratatouille", cuisine: "French", difficulty: "medium", timeMinutes: 50, dietaryTags: ["vegan", "gluten-free"], ingredients: [ { name: "eggplant", amount: 150, unit: "g" }, { name: "zucchini", amount: 150, unit: "g" }, { name: "tomato", amount: 2, unit: "piece" } ], steps: ["Layer and bake vegetables with herbs."], nutritionPerServing: { calories: 260, protein: 6, fat: 12, carbs: 32 } },
  { id: "fried-rice", title: "Fried Rice", cuisine: "Chinese", difficulty: "easy", timeMinutes: 20, dietaryTags: [], ingredients: [ { name: "rice", amount: 200, unit: "g" }, { name: "egg", amount: 1, unit: "piece", substitutions: ["tofu scramble"] }, { name: "peas", amount: 60, unit: "g" } ], steps: ["Stir-fry cold rice with vegetables and egg."], nutritionPerServing: { calories: 520, protein: 14, fat: 14, carbs: 84 } },
  { id: "bbq-chicken", title: "BBQ Chicken", cuisine: "American", difficulty: "easy", timeMinutes: 35, dietaryTags: ["gluten-free"], ingredients: [ { name: "chicken", amount: 250, unit: "g" }, { name: "bbq sauce", amount: 60, unit: "g" } ], steps: ["Bake or grill chicken with BBQ sauce."], nutritionPerServing: { calories: 460, protein: 36, fat: 20, carbs: 28 } },
  { id: "spinach-pasta", title: "Spinach Pasta", cuisine: "Italian", difficulty: "easy", timeMinutes: 20, dietaryTags: ["vegetarian"], ingredients: [ { name: "pasta", amount: 120, unit: "g" }, { name: "spinach", amount: 100, unit: "g" }, { name: "cream", amount: 80, unit: "ml", substitutions: ["cashew cream"] } ], steps: ["Cook pasta.", "Toss with spinach and cream sauce."], nutritionPerServing: { calories: 640, protein: 20, fat: 24, carbs: 88 } },
  { id: "tomato-soup", title: "Tomato Soup", cuisine: "International", difficulty: "easy", timeMinutes: 25, dietaryTags: ["vegetarian", "gluten-free"], ingredients: [ { name: "tomato", amount: 4, unit: "piece" }, { name: "onion", amount: 0.5, unit: "piece" }, { name: "cream", amount: 40, unit: "ml" } ], steps: ["Simmer tomatoes and onion; blend and finish with cream."], nutritionPerServing: { calories: 260, protein: 6, fat: 12, carbs: 30 } },
  { id: "banana-smoothie", title: "Banana Smoothie", cuisine: "International", difficulty: "easy", timeMinutes: 5, dietaryTags: ["vegetarian", "gluten-free"], ingredients: [ { name: "banana", amount: 1, unit: "piece" }, { name: "milk", amount: 240, unit: "ml", substitutions: ["almond milk"] } ], steps: ["Blend all ingredients until smooth."], nutritionPerServing: { calories: 280, protein: 10, fat: 6, carbs: 48 } }
];


