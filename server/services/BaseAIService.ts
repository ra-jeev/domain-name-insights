import type { AIService } from "./AIService";
import { type SystemPromptType, getSystemPrompt } from "./PromptService";

export abstract class BaseAIService implements AIService {
  protected getSystemPrompt(promptType: SystemPromptType): string {
    return getSystemPrompt(promptType);
  }

  abstract getDomainScore(domainName: string): Promise<string>;

  abstract compareDomains(
    firstDomain: string,
    secondDomain: string
  ): Promise<string>;
}
