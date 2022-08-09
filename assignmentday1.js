// declare variable called country continent and population
const country = 'India';
const continent = 'Asia';
const population = 1300000000;

console.log(country, continent, population);

const isIsland = false;
//let language ;
 console.log(typeof isIsland, typeof population, typeof country); // typeof language);

 //3. let const and var
 //a. Set the value of 'language' to the language spoken where you live
 //b. Think about which variables should be const variables (which values will never change, and which might change?). Then, change these variables to const.
 const language = 'kumaoni';

  console.log(language);
/*4. Basic operators
a. If your country split in half, and each half would contain half the population, then how many people would live in each half?
b. Increase the population of your country by 1 and log the result to the console.
c. Finland has a population of 6 million. Does your country have more people than Finland?
d. The average population of a country is 33 million people. Does your country have less people than the average country */ 
let halfPopulation = population/2;
const incrementedValue = halfPopulation+1;

console.log(incrementedValue);

let substring1 = 'mYCountryNameIsIndia';
substring1 += ' myContinentNameIsAsia';
substring1 += ' ourCountryHasPopulationOF139Crore';
//const fullname = substring1+' '+substring1+' '+substring1;
console.log(substring1)