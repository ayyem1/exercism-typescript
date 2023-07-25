/**
 * A list of color band names. The index of the band name represents its resistance value. i.e. 'black' represents a value of 0.
 */
const RESISTANCES = [
  'black',
  'brown',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'violet',
  'grey',
  'white',
];

/**
 * Decodes a list of color bands into a resistance value.
 * @param param0 An array of color band names. We only care about the first two.
 * @returns The decoded resistance value for the given color bands. If either first or second are not valid colors, the function will return -1.
 * @throws Exception of there are not at least 2 colors specified in the input.
 */
export function decodedValue(colors: Array<string>) {
  if (colors.length < 2) {
    throw new TypeError('At least 2 colors need to be present');
  }

  const [first, second] = colors;
  let firstResistance = RESISTANCES.indexOf(first);
  let secondResistance = RESISTANCES.indexOf(second);
  if (firstResistance < 0 || secondResistance < 0) return -1;

  return 10 * firstResistance + secondResistance;
}
