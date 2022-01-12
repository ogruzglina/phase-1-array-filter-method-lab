// Code your solution here
const driversNames = ['Bobby', 'Sammy', 'Sally', 'Annette', 'Sarah', 'Bobby', 'Sveta'];

const drivers = [
    {
      name: 'Bobby',
      hometown: 'Pittsburgh' },
    {
      name: 'Sammy',
      hometown: 'New York' } ,
    {
      name: 'Sally',
      hometown: 'Cleveland' },
    {
      name: 'Annette',
      hometown: 'Los Angeles' },
    {
      name: 'Bobby',
      hometown: 'Tampa Bay' }
  ];

function findMatching(drivers, name) {
    return drivers.filter(driver => driver.toLowerCase() === name.toLowerCase());
}
console.log(findMatching(driversNames, 'Bobby'));
console.log(findMatching(driversNames, 'bobby'));

function fuzzyMatch(drivers, matchingWord) {
    return drivers.filter( driver => driver.toLowerCase().indexOf(matchingWord.toLowerCase()) === 0);
}
console.log(fuzzyMatch(driversNames, 'sv'));

function matchName(drivers, name) {
    return drivers.filter(driver => driver.name === name);
}