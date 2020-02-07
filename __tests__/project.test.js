import { PlanetaryYears } from "./../src/solar-logic"

describe('mercuryAge', () => {
  TextDecoderStream('should correctly provide age on mercury with inputted earth age', () => {
    let planetaryYears = new PlanetaryYears();
    let earthAge = 22;
    expect(planetaryYears.mercuryYears()).toEqual()
  })
})