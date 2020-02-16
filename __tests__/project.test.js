import { PlanetaryYears } from "./../src/solar-logic";

describe('planetaryYears', () => {
  let planetaryYears = new PlanetaryYears(22, 80);
  test('Should provide planetary age based on the differential of another planet.', () => {
    planetaryYears.mercuryAge();
    expect(planetaryYears.planetAge).toEqual(91.66666666666667);
  })
  test('Should provide life expectancy based on the differential of another planet.', () => {
    planetaryYears.mercuryExpectancy();
    expect(planetaryYears.planetExpectancy).toEqual(333.33333333333337);
  })
  test('Should correctly calculate the time someone has left to live on another planet, assuming their age is less than their life expectancy.', () => {
    planetaryYears.expectancyRemainder();
    planetaryYears.mercuryAge();
    planetaryYears.mercuryExpectancy();
    expect(planetaryYears.planetRemainder).toEqual(241.66666666666669);
  })
  test('Should correctly calculate the time someone has left to live on another planet, assuming their age is less than their life expectancy.', () => {
    let planetaryYears = new PlanetaryYears(95, 80);
    planetaryYears.mercuryAge();
    planetaryYears.mercuryExpectancy();
    planetaryYears.expectancyRemainder();
    expect(planetaryYears.planetExcess).toEqual(8765);
  })
  // test('', () => {

  //   expect().toEqual();
  // })
});
