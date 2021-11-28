//You'll be writing three functions:
//findMatching- This function takes an array of drivers' names and a string as arguments, and returns the matching list of drivers. The function should be case insensitive.
//fuzzyMatch - This function takes an array of drivers' names and a string as arguments for querying the array, and returns all drivers whose names begin with the provided letters.
//matchName - This function takes an array of driver objects and a string as arguments. Each driver object has two properties: name and hometown. The function should return each element whose name property matches the provided string argument.

const drivers = [
  {
      name: "Defne",
      hometown: "Istanbul",
  },
  {
    name: "Ayse",
    hometown: "Izmir",
  },
  {
      name: "Collier",
      hometown: "Indianapolis",
  },
  {
      name: "Ali",
      hometown: "Sivas",      
  },
];

function findMatching(array, name) {
   const matchingDrivers = array.filter(x => x.toLowerCase().includes(name.toLowerCase()));
   return matchingDrivers;
};

function fuzzyMatch(array, string) {
    const length = string.length;
    const almostMatch = array.filter(y => y.slice(0, length) === string);
    return almostMatch;
};

function matchName(array, phrase){
    const namedDrivers = array.filter(z => z.name === phrase);
    return namedDrivers;
}