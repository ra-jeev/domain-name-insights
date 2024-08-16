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

  const promises = [
    getAIService("Anthropic").getDomainSuggestions(purpose),
    getAIService("HubAI").getDomainSuggestions(purpose),
  ];

  const results = await Promise.allSettled(promises);

  const response: {
    parsed: {
      anthropic?: DomainSuggestionsData;
      hubAi?: DomainSuggestionsData;
    };
    rawStrings: {
      anthropic?: string;
      hubAi?: string;
    };
  } = { parsed: {}, rawStrings: {} };

  results.forEach((result, index) => {
    const key = index === 0 ? "anthropic" : "hubAi";
    if (result.status === "fulfilled") {
      try {
        const parsedResult = extractAndParseJson<DomainSuggestionsData>(
          result.value
        );

        response.parsed[key] = parsedResult;
        response.rawStrings[key] = result.value;
      } catch (error) {
        console.error(`Error parsing JSON for ${key}:`, error);
      }
    } else {
      console.error(`Error from ${key}:`, result.reason);
    }
  });

  if (Object.keys(response.rawStrings).length) {
    await saveSuggestions(purpose, JSON.stringify(response.rawStrings));
  }

  return response.parsed;
});
