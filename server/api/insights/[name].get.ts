import { getAIService } from "~~/server/services/AIServiceFactory";
import type { DomainScoreData } from "~~/types";

const saveInsights = async (name: string, data: string) => {
  const db = hubDatabase();
  const res = await db
    .prepare("INSERT INTO insights (domain, data) VALUES (?1, ?2)")
    .bind(name, data)
    .run();

  console.log("DB res", res);
};

export default defineCachedEventHandler(
  async (event) => {
    const { name } = event.context.params || {};
    if (!name) {
      throw createError({
        statusCode: 400,
        statusMessage: "Domain name is required",
      });
    }

    const promises = [
      getAIService("Anthropic").getDomainScore(name),
      getAIService("HubAI").getDomainScore(name),
    ];

    const results = await Promise.allSettled(promises);

    const response: {
      parsed: {
        anthropic?: DomainScoreData;
        hubAi?: DomainScoreData;
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
          const parsedResult = extractAndParseJson<DomainScoreData>(
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
      await saveInsights(name, JSON.stringify(response.rawStrings));
    }

    return response.parsed;
  },
  {
    maxAge: 24 * 60 * 60, // 1 day
    getKey: (event) => event.path,
  }
);
