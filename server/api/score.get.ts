import { getAIService } from "../services/AIServiceFactory";

export default defineEventHandler(async (event) => {
  const query = getQuery(event);
  if (!query.name) {
    throw createError({
      statusCode: 400,
      statusMessage: "Domain name is required",
    });
  }

  const service = getAIService();

  return await service.getDomainScore(query.name as string);
});
