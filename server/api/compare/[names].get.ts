import { getAIService } from "~~/server/services/AIServiceFactory";
import type { DomainsComparisonData } from "~~/types";

export default defineEventHandler(async (event) => {
  const { names } = event.context.params || {};
  if (!names) {
    throw createError({
      statusCode: 400,
      statusMessage: "Domain names are required",
    });
  }

  const domains = names.split(",");
  if (domains.length !== 2) {
    throw createError({
      statusCode: 400,
      statusMessage: "Comparison is allowed between two domain names only",
    });
  }

  const [domain1, domain2] = domains;

  const data = await getAIService().compareDomains(domain1, domain2);

  console.log("response from the AI service: ", data);

  try {
    return extractAndParseJson<DomainsComparisonData>(data);
  } catch (error) {
    console.error("Error parsing JSON data:", error);
    throw createError({
      statusCode: 422,
      statusMessage: "Failed to compare domains. Please try again.",
    });
  }
});
