// 1. Family name of drivers with british nationality
// 2. Summation of ages of drivers
// 3. Form an object like this for each driver: { <code>: <GivenName + FamilyName>}
// example: {“VET”: “Sebastian Vettel”, “VER”: “Max Verstappen”}

const driverObject = require("./drivers.json");

let getFamilynameBritishDrivers = (obj) => {
  return obj
    .filter(driver => driver.Nationality === "British")
    .map(driver => driver.FamilyName);
};

let totalDriverAge = (obj) => {
  return obj.reduce((sum, driver) => sum + driver.Age, 0);
};

let getDriverObject = (obj) => {
  //const newObj = {};
  return obj.reduce((newObj, driver) => {
    newObj[
      driver.FamilyName.slice(0, 3).toUpperCase()
    ] = `${driver.GivenName} ${driver.FamilyName}`;
    return newObj;
  }, {});

};

// console.log(getFamilynameBritishDrivers(driverObject));

// console.log(totalDriverAge(driverObject));

console.log(getDriverObject(driverObject));
