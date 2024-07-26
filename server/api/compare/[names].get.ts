import { getAIService } from "~~/server/services/AIServiceFactory";
import type { DomainsComparisonData } from "~~/types";

const saveComparisonResult = async (
  domain1: string,
  domain2: string,
  data: string
) => {
  const db = hubDatabase();
  const res = await db
    .prepare(
      "INSERT INTO comparisons (domain_1, domain_2, data) VALUES (?1, ?2, ?3)"
    )
    .bind(domain1, domain2, data)
    .run();

  console.log("DB res", res);
};

export default defineCachedEventHandler(
  async (event) => {
    console.log(
      "================= inside domain comparison handler ==============="
    );
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

    await saveComparisonResult(domain1, domain2, data);

    try {
      return extractAndParseJson<DomainsComparisonData>(data);
    } catch (error) {
      console.error("Error parsing JSON data:", error);
      throw createError({
        statusCode: 422,
        statusMessage: "Failed to compare domains. Please try again.",
      });
    }
  },
  {
    maxAge: 24 * 60 * 60, // 1 day
    getKey: (event) => {
      const apiPath = "/api/compare/";

      const domainsPart = event.path.split(apiPath).pop();
      if (domainsPart) {
        const domains = domainsPart.split(",");
        if (domains.length >= 2) {
          const key = apiPath + domains.sort().join(",");
          console.log("return key: ", key);
          return key;
        }
      }

      console.log("return event.path as the key: ", event.path);
      return event.path;
    },
  }
);
