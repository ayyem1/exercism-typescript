/**
 * Implemenation of two-fer. See README for problem description.
 * @param name Name of friend.
 * @returns string that describes who you are sharing your cookie with.
 */
export function twoFer(name: string = ""): string {
  if (name.length === 0) {
    return `One for you, one for me.`;
  }

  return `One for ${name}, one for me.`;
}
