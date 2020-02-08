import { PlanetaryYears } from "./../src/solar-logic"
import { calculateMercury } from "./../src/solar-logic"

describe('mercuryAge', () => {
  test('should correctly provide planetary "year" differentiation', () => {
    let planetaryYears = new PlanetaryYears();
    planetaryYears.mercuryDif();
    expect(planetaryYears.planetDif).toEqual(0.24);
  })
})

describe('venusDif', () => {
  test('should correctly pride planetary "year" differentiation', () => {
    let planetaryYears = new PlanetaryYears();
    planetaryYears.venusDif();
    expect(planetaryYears.planetDif).toEqual(0.62);
  })
})

describe('marsDif', () => {
  test('should correctly pide planetary "year" differentiation', () => {
    let planetaryYears = new PlanetaryYears();
    planetaryYears.marsDif();
    expect(planetaryYears.planetDif).toEqual(1.88);
  })
})

describe('jupitermarsDif', () => {
  test('should correctly provide planetary "year" differentiation', () => {
    let planetaryYears = new PlanetaryYears();
    planetaryYears.jupiterDif();
    expect(planetaryYears.planetDif).toEqual(11.86);
  })
})

describe('planetaryAge', () => {
  test('should correctly provide age on jupiter with inputted earth age', () => {
    let planetaryYears = new PlanetaryYears(22);
    planetaryYears.mercuryDif();
    planetaryYears.planetaryAge()
    expect(planetaryYears.planetAge).toEqual(91.66666666666667);
  })
})

describe('planetaryExpectancy', () => {
  test('should correctly provide life expectancy on other planets', () => {
    let planetaryYears = new PlanetaryYears();
    planetaryYears.mercuryDif();
    planetaryYears.lifeExpectancy = 80;
    planetaryYears.planetaryExpectancy();
    expect(planetaryYears.planetExpectancy).toEqual(333.33333333333337);
  })
})

describe('expectancyRemainder', () => {
  test('should correctly produce the remainder of a lifespan on a planet', () => {
    let planetaryYears = new PlanetaryYears();
    planetaryYears.planetAge = 20;
    planetaryYears.planetExpectancy = 80; 
    planetaryYears.ExpectancyRemainder();
    expect(planetaryYears.planetRemainder).toEqual(60);
  })
})

describe('calculateMercury', () => {
  test('should correctly calculate planetary age, life expectancy, and life expectancy remainder for the planet of mercury', () => {
    let planetaryYears = new PlanetaryYears();
    planetaryYears.earthAge = 22;
    planetaryYears.lifeExpectancy = 80;
    calculateMercury();
    expect(planetaryYears.planetExpectancy).toEqual();
  })
})
// describe('', () => {
//   test('should correctly', () => {
//     let planetaryYears = new PlanetaryYears();
//     expect().toEqual();
//   })
// })
