import type { AiTextGenerationOutput } from "@cloudflare/workers-types/experimental";
import { BaseAIService } from "./BaseAIService";

export class HubAIService extends BaseAIService {
  private static instance: HubAIService;
  private readonly CF_MODEL = "@cf/meta/llama-3.1-8b-instruct";

  private constructor() {
    super();
  }

  static getInstance(): HubAIService {
    if (!HubAIService.instance) {
      HubAIService.instance = new HubAIService();
    }

    return HubAIService.instance;
  }

  hasResponse(output: AiTextGenerationOutput): output is { response: string } {
    return (output as { response?: string }).response !== undefined;
  }
  async getDomainScore(domainName: string): Promise<string> {
    const systemPrompt = this.getSystemPrompt("score");

    const response = await hubAI().run(this.CF_MODEL, {
      max_tokens: 1000,
      temperature: 0.4,
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: `Analyze the domain name: ${domainName}`,
        },
      ],
    });

    console.log("response from hubAI", response);

    if (this.hasResponse(response)) {
      return response.response;
    }

    throw new Error("Failed to generate response from the AI service");
  }

  async compareDomains(
    firstDomain: string,
    secondDomain: string
  ): Promise<string> {
    const systemPrompt = this.getSystemPrompt("compare");

    const response = await hubAI().run(this.CF_MODEL, {
      max_tokens: 1500,
      temperature: 0.4,
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: `Compare the following domain names: ${firstDomain} and ${secondDomain}`,
        },
      ],
    });

    console.log("response from hubAI", response);

    if (this.hasResponse(response)) {
      return response.response;
    }

    throw new Error("Failed to generate response from the AI service");
  }

  async getDomainSuggestions(purpose: string): Promise<string> {
    const systemPrompt = this.getSystemPrompt("suggestions");

    const response = await hubAI().run(this.CF_MODEL, {
      max_tokens: 1000,
      temperature: 0.4,
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: `Generate domain name suggestions for the following purpose: ${purpose}`,
        },
      ],
    });

    console.log("response from hubAI", response);

    if (this.hasResponse(response)) {
      return response.response;
    }

    throw new Error("Failed to generate response from the AI service");
  }
}
