// Code your solution here:
function driversWithRevenueOver(drivers, revenue) {
  const newDrivers = drivers.filter(function(driver){
    return driver.revenue > revenue;
  });
  return newDrivers;
}

function driverNamesWithRevenueOver(drivers, revenue) {
  const newDrivers = drivers.filter(function(driver){
    return driver.revenue > revenue;
  }).map(function(driver){
    return driver.name;
  });
  return newDrivers;
}

function exactMatch(drivers, attribute) {
  const newDrivers = drivers.filter(function(driver){
    for (const key in attribute) {
      if (driver[key] === attribute[Object.keys(attribute)[0]]) {
        return driver;
      }
    }
  });
  return newDrivers;
}




function exactMatchToList(drivers, attribute) {
  const newDrivers = drivers.filter(function(driver){
    for (const key in attribute) {
      if (driver[key] === attribute[Object.keys(attribute)[0]]) {
        return driver;
      }
    }
  }).map(function(driver){
    return driver.name;
  });
  return newDrivers;
}
