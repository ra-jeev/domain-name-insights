export interface AIService {
  getDomainScore(domainName: string): Promise<string>;
}
