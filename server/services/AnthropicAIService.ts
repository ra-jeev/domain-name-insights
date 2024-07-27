import Anthropic from "@anthropic-ai/sdk";
import { BaseAIService } from "./BaseAIService";

export class AnthropicAIService extends BaseAIService {
  private static instance: AnthropicAIService;
  private anthropic: Anthropic;

  private constructor() {
    super();

    const apiKey = process.env.ANTHROPIC_API_KEY;
    if (!apiKey) {
      throw new Error("Missing ANTHROPIC_API_KEY environment variable");
    }

    this.anthropic = new Anthropic({
      apiKey,
    });
  }

  static getInstance(): AnthropicAIService {
    if (!AnthropicAIService.instance) {
      AnthropicAIService.instance = new AnthropicAIService();
    }

    return AnthropicAIService.instance;
  }

  async getDomainScore(domainName: string): Promise<string> {
    const systemPrompt = this.getSystemPrompt("score");

    const response = await this.anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 1000,
      temperature: 0.4,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: `Analyze the domain name: ${domainName}`,
        },
      ],
    });

    return (response.content[0] as Anthropic.TextBlock).text;
  }

  async compareDomains(
    firstDomain: string,
    secondDomain: string
  ): Promise<string> {
    const systemPrompt = this.getSystemPrompt("compare");

    const response = await this.anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 1500,
      temperature: 0.4,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: `Compare the following domain names: ${firstDomain} and ${secondDomain}`,
        },
      ],
    });

    return (response.content[0] as Anthropic.TextBlock).text;
  }

  async getDomainSuggestions(purpose: string): Promise<string> {
    const systemPrompt = this.getSystemPrompt("suggestions");

    const response = await this.anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: 1000,
      temperature: 0.4,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: `Generate domain name suggestions for the following purpose: ${purpose}`,
        },
      ],
    });

    return (response.content[0] as Anthropic.TextBlock).text;
  }
}
