import { PlanetaryYears } from "./../src/solar-logic"

describe('mercuryAge', () => {
  test('should correctly provide age on mercury with inputted earth age', () => {
    let planetaryYears = new PlanetaryYears();
    planetaryYears.mercuryAge();
    expect(planetaryYears.planetDif).toEqual(0.24);
  })
})

describe('venusAge', () => {
  test('should correctly provide age on venus with inputted earth age', () => {
    let planetaryYears = new PlanetaryYears();
    planetaryYears.venusAge();
    expect(planetaryYears.planetDif).toEqual(0.62);
  })
})

describe('marsAge', () => {
  test('should correctly provide age on mars with inputted earth age', () => {
    let planetaryYears = new PlanetaryYears();
    planetaryYears.marsAge();
    expect(planetaryYears.planetDif).toEqual(1.88);
  })
})

describe('jupiterAge', () => {
  test('should correctly provide age on jupiter with inputted earth age', () => {
    let planetaryYears = new PlanetaryYears();
    planetaryYears.jupiterAge();
    expect(planetaryYears.planetDif).toEqual(11.86);
  })
})


describe('jupiterAge', () => {
  test('should correctly provide age on jupiter with inputted earth age', () => {
    let planetaryYears = new PlanetaryYears();
    expect(planetaryYears.jupiterAge()).toEqual();
  })
})