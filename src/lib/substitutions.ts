const SUB_MAP: Record<string, string[]> = {
  "milk": ["oat milk", "almond milk", "soy milk"],
  "egg": ["banana", "flax egg"],
  "butter": ["olive oil", "coconut oil"],
  "mozzarella": ["vegan cheese"],
  "cream": ["coconut milk", "cashew cream"],
  "ground beef": ["lentils", "black beans"],
  "chicken": ["tofu"],
  "shrimp": ["tofu"],
  "soy sauce": ["tamari"],
  "wheat flour": ["gluten-free flour"],
};

export function suggestSubstitutions(missing: string[]): Record<string, string[]> {
  const out: Record<string, string[]> = {};
  for (const m of missing) {
    const key = m.toLowerCase();
    if (SUB_MAP[key]) out[m] = SUB_MAP[key];
  }
  return out;
}


