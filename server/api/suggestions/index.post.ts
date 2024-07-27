import { getAIService } from "~~/server/services/AIServiceFactory";
import type { DomainSuggestionsData } from "~~/types";

const saveSuggestions = async (purpose: string, data: string) => {
  const db = hubDatabase();
  const res = await db
    .prepare("INSERT INTO suggestions (purpose, data) VALUES (?1, ?2)")
    .bind(purpose, data)
    .run();

  console.log("DB res", res);
};

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { purpose } = body;
  if (!purpose) {
    throw createError({
      statusCode: 400,
      statusMessage: "Purpose is required",
    });
  }

  const data = await getAIService().getDomainSuggestions(purpose);

  console.log("response from the AI service: ", data);

  try {
    const res = extractAndParseJson<DomainSuggestionsData>(data);
    await saveSuggestions(purpose, data);

    return res;
  } catch (error) {
    console.error("Error parsing JSON data:", error);
    throw createError({
      statusCode: 422,
      statusMessage: "Failed to generate suggestions. Please try again.",
    });
  }
});
