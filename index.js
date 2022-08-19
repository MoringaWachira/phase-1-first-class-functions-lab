// Code your solution in this file!


const arrayOfDrivers = ["Jaylen", "Silvia", "Gigi", "Harry", "Bey"];


// return 1st 2 drivers
const returnFirstTwoDrivers = function (arrayOfDrivers) {
 return arrayOfDrivers.slice(0, 2);
}

// return last2 drivers
const returnLastTwoDrivers = function(arrayOfDrivers) {
    return arrayOfDrivers.slice(-2);
}


// selecting Drivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


// fare multiplier
const createFareMultiplier = function(integerMultiplier) {
    return function(fare) {
        return fare * integerMultiplier;
    }
}

// fare doubler
const fareDoubler = createFareMultiplier(2);



// fare tripler
const fareTripler = createFareMultiplier(3);


// selecting diff drivers
const selectDifferentDrivers = function(arrayOfDrivers, differentDriversArray){
    return differentDriversArray(arrayOfDrivers);
}













    