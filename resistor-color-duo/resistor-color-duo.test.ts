import { decodedValue } from './resistor-color-duo'

describe('Resistor Colors', () => {
  it('Brown and black', () => {
    expect(decodedValue(['brown', 'black'])).toEqual(10)
  })

  it('Blue and grey', () => {
    expect(decodedValue(['blue', 'grey'])).toEqual(68)
  })

  it('White and red', () => {
    expect(decodedValue(['white', 'red'])).toEqual(92)
  })

  it('Yellow and violet', () => {
    expect(decodedValue(['yellow', 'violet'])).toEqual(47)
  })

  it('Orange and orange', () => {
    expect(decodedValue(['orange', 'orange'])).toEqual(33)
  })

  it('Ignore additional colors', () => {
    expect(decodedValue(['green', 'brown', 'orange'])).toEqual(51)
  })

  it('Black and brown, one-digit', () => {
    expect(decodedValue(['black', 'brown'])).toEqual(1)
  })

  it('Black and magenta , invalid input', () => {
    expect(decodedValue(['black', 'magenta'])).toEqual(-1)
  })

  it('Magenta and black , invalid input', () => {
    expect(decodedValue(['magenta', 'black'])).toEqual(-1)
  })
})
