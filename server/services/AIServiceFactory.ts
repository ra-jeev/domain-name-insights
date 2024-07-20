import type { AIService } from "./AIService";
import { AnthropicAIService } from "./AnthropicAIService";

export function getAIService(): AIService {
  // Return the default service for now
  return AnthropicAIService.getInstance();
}
