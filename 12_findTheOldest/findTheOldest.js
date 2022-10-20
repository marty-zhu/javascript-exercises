const findTheOldest = function(people) {
    const thisYear = new Date().getFullYear();
    let Oldest = people.sort((firstPerson, secondPerson) => {
        let firstAge = (firstPerson.yearOfDeath || thisYear) - firstPerson.yearOfBirth;
        let secondAge = (secondPerson.yearOfDeath || thisYear) - secondPerson.yearOfBirth;
        return firstAge >= secondAge ? -1:1;
    });
    return Oldest[0];
};

// Do not edit below this line
module.exports = findTheOldest;
