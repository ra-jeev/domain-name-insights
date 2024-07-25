export interface AIService {
  getDomainScore(domainName: string): Promise<string>;
  compareDomains(firstDomain: string, secondDomain: string): Promise<string>;
}
