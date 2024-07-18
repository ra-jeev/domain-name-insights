export function isValidDomain(domain: string): boolean {
  const regex = /^(?:(?:[a-zA-Z0-9-]{1,63}\.)+(?:[a-zA-Z]{2,}))$/;

  return regex.test(domain);
}
