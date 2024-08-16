import type { AIService } from "./AIService";
import { AnthropicAIService } from "./AnthropicAIService";
import { HubAIService } from "./HubAIService";

type AIServiceType = "Anthropic" | "HubAI";

export function getAIService(service: AIServiceType): AIService {
  switch (service) {
    case "Anthropic":
      return AnthropicAIService.getInstance();
    case "HubAI":
      return HubAIService.getInstance();
    default:
      throw new Error(`Unsupported AI service: ${service}`);
  }
}
