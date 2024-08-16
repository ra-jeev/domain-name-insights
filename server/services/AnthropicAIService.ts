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

  async makeAIRequest(
    maxTokens: number,
    systemPrompt: string,
    message: string
  ): Promise<string> {
    const response = await this.anthropic.messages.create({
      model: "claude-3-5-sonnet-20240620",
      max_tokens: maxTokens,
      temperature: 0.4,
      system: systemPrompt,
      messages: [
        {
          role: "user",
          content: message,
        },
      ],
    });

    return (response.content[0] as Anthropic.TextBlock).text;
  }
}
