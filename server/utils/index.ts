export function extractAndParseJson<T>(text: string): T {
  try {
    return JSON.parse(text) as T;
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  const backtickPattern = /```(?:json)?\s*([\s\S]*?)\s*```/g;
  const matches = text.match(backtickPattern);

  if (matches) {
    for (const match of matches) {
      const content = match.replace(/```(?:json)?\s*|\s*```/g, "").trim();
      try {
        return JSON.parse(content) as T;
      } catch (error) {
        console.error("Error parsing JSON:", error);
        continue;
      }
    }
  }

  throw new Error("No valid JSON found in the text");
}
