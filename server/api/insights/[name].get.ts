import { getAIService } from "~~/server/services/AIServiceFactory";
import type { DomainScoreData } from "~~/types";

export default defineEventHandler(async (event) => {
  const { name } = event.context.params || {};
  if (!name) {
    throw createError({
      statusCode: 400,
      statusMessage: "Domain name is required",
    });
  }

  const data = await getAIService().getDomainScore(name);

  console.log("response from the AI service: ", data);

  try {
    return extractAndParseJson<DomainScoreData>(data);
  } catch (error) {
    console.error("Error parsing JSON data:", error);
    throw createError({
      statusCode: 422,
      statusMessage: "Failed to generate insights. Please try again.",
    });
  }
});
