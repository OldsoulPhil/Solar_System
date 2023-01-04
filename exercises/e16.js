import { data } from "../data/data";

// SPACE DATA EXERCISE 16
// Return the year with the greatest number of Asteroids discoveries
// Return example: 1902

export function getGreatestDiscoveryYear(data) {
  const getGDY = data.asteroids;
  const results = getGDY.map(function (getDiscovers) {
    return getDiscovers;
  }).reduce(function (result, num) {
    result[num.discoveryYear] = (result[num.discoveryYear] || 0) + 1;
    return result;
  });
  const addedResults = Object.keys(results).filter(function (getit) {
    return results[getit] > 2;
  });
  return parseInt(addedResults[0]);
}



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
