import { PlanetaryYears } from "./../src/solar-logic"

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
    let planetaryYears = new PlanetaryYears();
    expect(planetaryYears.planetaryAge()).toEqual();
  })
})

describe('planetaryExpectancy', () => {
  test('should correctly provide life expectancy on other planets', () => {
    let planetaryYears = new PlanetaryYears();
    expect(planetaryYears.planetaryEcpectancy()).toEqual();
  })
})

describe('expectancyRemainder', () => {
  test('should correctly produce the remainder of a lifespan on a planet', () => {
    let planetaryYears = new PlanetaryYears();
    expect(planetaryYears.ExpectancyRemainder()).toEqual(number);
  })
})
// describe('', () => {
//   test('should correctly', () => {
//     let planetaryYears = new PlanetaryYears();
//     expect().toEqual();
//   })
// })
