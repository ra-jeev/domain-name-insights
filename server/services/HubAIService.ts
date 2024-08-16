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

  async makeAIRequest(
    maxTokens: number,
    systemPrompt: string,
    message: string
  ): Promise<string> {
    const response = await hubAI().run(this.CF_MODEL, {
      max_tokens: maxTokens,
      temperature: 0.4,
      messages: [
        {
          role: "system",
          content: systemPrompt,
        },
        {
          role: "user",
          content: message,
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
