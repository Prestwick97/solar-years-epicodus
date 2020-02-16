import { PlanetaryYears } from "./../src/solar-logic";

describe('planetaryYears', () => {
  let planetaryYears = new PlanetaryYears(22, 80);
  test('Should provide planetary age based on the differential of another planet.', () => {
    planetaryYears.mercuryAge();
    expect(planetaryYears.planetAge).toEqual(91.66666666666667);
  })
  test('Should provide life expectancy based on the differential of another planet.', () => {
    planetaryYears.mercuryExpectancy();
    expect(planetaryYears.planetExpectancy).toEqual();
  })
  // test('', () => {
    
  //   expect().toEqual();
  // })
  // test('', () => {

  //   expect().toEqual();
  // })
  // test('', () => {

  //   expect().toEqual();
  // })
  // test('', () => {

  //   expect().toEqual();
  // })
  // test('', () => {

  //   expect().toEqual();
  // })
  // test('', () => {

  //   expect().toEqual();
  // })
});
