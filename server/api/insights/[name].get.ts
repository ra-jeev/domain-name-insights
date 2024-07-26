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
    console.log(
      "================= inside domain insights handler ==============="
    );

    const { name } = event.context.params || {};
    if (!name) {
      throw createError({
        statusCode: 400,
        statusMessage: "Domain name is required",
      });
    }

    const data = await getAIService().getDomainScore(name);

    console.log("response from the AI service: ", data);

    await saveInsights(name, data);

    try {
      return extractAndParseJson<DomainScoreData>(data);
    } catch (error) {
      console.error("Error parsing JSON data:", error);
      throw createError({
        statusCode: 422,
        statusMessage: "Failed to generate insights. Please try again.",
      });
    }
  },
  {
    maxAge: 24 * 60 * 60, // 1 day
    getKey: (event) => event.path,
  }
);
