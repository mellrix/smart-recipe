import { useState } from "react";
import type { DietaryTag } from "../types";

const ALL_TAGS: DietaryTag[] = [
  "vegetarian",
  "vegan",
  "gluten-free",
  "dairy-free",
  "nut-free",
  "keto",
  "paleo",
];

interface Props {
  onChange: (data: {
    ingredients: string[];
    dietary: DietaryTag[];
    maxTimeMinutes?: number;
    difficulty?: "easy" | "medium" | "hard" | "any";
  }) => void;
}

export function IngredientInput({ onChange }: Props) {
  const [raw, setRaw] = useState("");
  const [dietary, setDietary] = useState<DietaryTag[]>([]);
  const [maxTime, setMaxTime] = useState<number | undefined>(undefined);
  const [difficulty, setDifficulty] = useState<"easy" | "medium" | "hard" | "any">("any");

  function emit() {
    const ingredients = raw
      .split(/[\n,]/)
      .map((s) => s.trim().toLowerCase())
      .filter(Boolean);
    onChange({ ingredients, dietary, maxTimeMinutes: maxTime, difficulty });
  }

  function toggleTag(tag: DietaryTag) {
    setDietary((prev) => {
      const next = prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag];
      return next;
    });
  }

  return (
    <div className="input-panel">
      <label>Ingredients (comma or newline separated)</label>
      <textarea
        placeholder="e.g. tomato, onion, mozzarella"
        value={raw}
        onChange={(e) => setRaw(e.target.value)}
        onBlur={emit}
        rows={4}
      />

      <div className="filters">
        <div className="chips">
          {ALL_TAGS.map((t) => (
            <button
              key={t}
              className={dietary.includes(t) ? "chip active" : "chip"}
              onClick={() => {
                toggleTag(t);
                setTimeout(emit, 0);
              }}
              type="button"
            >
              {t}
            </button>
          ))}
        </div>

        <div className="row">
          <label>Max time (min)</label>
          <input
            type="number"
            min={5}
            step={5}
            value={maxTime ?? ""}
            onChange={(e) => setMaxTime(e.target.value ? Number(e.target.value) : undefined)}
            onBlur={emit}
          />
        </div>

        <div className="row">
          <label>Difficulty</label>
          <select
            value={difficulty}
            onChange={(e) => {
              setDifficulty(e.target.value as any);
              setTimeout(emit, 0);
            }}
          >
            <option value="any">Any</option>
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>
      </div>
    </div>
  );
}


