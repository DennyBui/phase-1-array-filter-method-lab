// Code your solution here
const drivers = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby']
function findMatching(drivers, value) {
    return drivers.filter(driver => driver.toLowerCase() === value.toLowerCase());
  }
function fuzzyMatch(drivers, value) {
    return drivers.filter(driver => driver.startsWith(value));
}
function matchName(drivers, value) {
    return drivers.filter(driver => driver.name === value);
}