// Code your solution in this file!
const returnFirstTwoDrivers = function(drivers){
    return drivers.slice(0,2);
};

const returnLastTwoDrivers =  function(drivers){
    return drivers.slice(-2);
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(multiplier) {
    return function(fare) {
        return fare * multiplier;
    };
};
const fareQuadrupler = createFareMultiplier(4);
fareQuadrupler(5);  // => 20
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function(drivers, driverSelector) {
    return driverSelector(drivers);
};

module.exports = {
    returnFirstTwoDrivers,
    returnLastTwoDrivers,
    selectingDrivers,
    createFareMultiplier,
    fareDoubler,
    fareTripler,
    selectDifferentDrivers
};
