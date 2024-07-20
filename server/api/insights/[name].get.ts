import { getAIService } from "~~/server/services/AIServiceFactory";

export default defineEventHandler(async (event) => {
  const { name } = event.context.params || {};
  if (!name) {
    throw createError({
      statusCode: 400,
      statusMessage: "Domain name is required",
    });
  }

  const service = getAIService();

  return await service.getDomainScore(name);
});
