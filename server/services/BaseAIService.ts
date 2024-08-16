import type { AIService } from "./AIService";
import { type SystemPromptType, getSystemPrompt } from "./PromptService";

export abstract class BaseAIService implements AIService {
  protected getSystemPrompt(promptType: SystemPromptType): string {
    return getSystemPrompt(promptType);
  }

  abstract makeAIRequest(
    maxTokens: number,
    systemPrompt: string,
    message: string
  ): Promise<string>;

  async getDomainScore(domainName: string): Promise<string> {
    return this.makeAIRequest(
      1000,
      this.getSystemPrompt("score"),
      `Analyze the domain name: ${domainName}`
    );
  }

  async compareDomains(
    firstDomain: string,
    secondDomain: string
  ): Promise<string> {
    return await this.makeAIRequest(
      1500,
      this.getSystemPrompt("compare"),
      `Compare the following domain names: ${firstDomain} and ${secondDomain}`
    );
  }

  async getDomainSuggestions(purpose: string): Promise<string> {
    return await this.makeAIRequest(
      1000,
      this.getSystemPrompt("suggestions"),
      `Generate domain name suggestions for the following purpose: ${purpose}`
    );
  }
}
