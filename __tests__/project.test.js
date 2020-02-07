import { PlanetaryYears } from "./../src/solar-logic"

describe('mercuryAge', () => {
  test('should correctly provide age on mercury with inputted earth age', () => {
    let planetaryYears = new PlanetaryYears();
    expect(planetaryYears.mercuryAge()).toEqual();
  })
})

describe('venusAge', () => {
  test('should correctly provide age on venus with inputted earth age', () => {
    let planetaryYears = new PlanetaryYears();
    expect(planetaryYears.venusAge()).toEqual();
  })
})

describe('marsAge', () => {
  test('should correctly provide age on mars with inputted earth age', () => {
    let planetaryYears = new PlanetaryYears();
    expect(planetaryYears.marsAge()).toEqual(34);
  })
})