import { data } from "../data/data";

// SPACE DATA EXERCISE 8
// Return a Planet name by a given moon name
// Return example: 'Planet Name'

export function findPlanetNameByMoon(data, moonName = 'Triton') {
  const findPNBM = data.planets;
  const results = findPNBM.filter(function (filterMoons) {
    return filterMoons.moons > moonName;
  })
    .map(function (getName) {
      return getName['name'];
    });
  return results[0];
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
