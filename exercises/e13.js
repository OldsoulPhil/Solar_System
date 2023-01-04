import { data } from "../data/data";

// SPACE DATA EXERCISE 13
// Return the average temperature of all the Planets
// Return example: 132.53

export function getAveragePlanetsTemperature(data) {
  const getAPT = data.planets;
  const results = getAPT.filter(function (getPlanets) {
    return getPlanets.id;
  }).map(function (getAvgTemp) {
    return getAvgTemp.avgTemp;
  }).reduce(function (sum, num) {
    return sum + num;
  });
  return results / 8;
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-13"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
