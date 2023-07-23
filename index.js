// Implement returnFirstTwoDrivers function
function returnFirstTwoDrivers(drivers) {
  return drivers.slice(0, 2);
}

// Implement returnLastTwoDrivers function
function returnLastTwoDrivers(drivers) {
  return drivers.slice(-2);
}

// Implement selectingDrivers array
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];


// Implement createFareMultiplier function
function createFareMultiplier(multiplier) {
    return function (fare) {
      return fare * multiplier;
    };
  }

  
// Implement fareDoubler function
function fareDoubler(fare) {
    return createFareMultiplier(2)(fare);
  }
  
  // Implement fareTripler function
  function fareTripler(fare) {
    return createFareMultiplier(3)(fare);
  }
  

  function selectDifferentDrivers(arrayOfDrivers, func) {
    return func(arrayOfDrivers);
  }
  
