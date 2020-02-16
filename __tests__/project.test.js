import { PlanetaryYears } from "./../src/solar-logic";

describe('planetaryYears', () => {
  test('should correctly provide planetary "year" differentiation', () => {
    let planetaryYears = new PlanetaryYears(22, 80);
    planetaryYears.mercuryAge()
    expect(planetaryYears.planetAge).toEqual(91.66666666666667);
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
  // test('', () => {

  //   expect().toEqual();
  // })
});
