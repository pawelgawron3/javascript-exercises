const findTheOldest = function (arr) {
  return arr
    .map((person) => {
      if (person.yearOfDeath === undefined) {
        person.yearOfDeath = new Date().getFullYear();
      }
      let yearsLived = person.yearOfDeath - person.yearOfBirth;
      return { name: person.name, yearsLived: yearsLived };
    })
    .sort((a, b) => b.yearsLived - a.yearsLived)[0];
};

// Do not edit below this line
module.exports = findTheOldest;
