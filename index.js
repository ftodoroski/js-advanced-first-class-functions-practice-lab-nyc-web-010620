// Code your solution in this file!
function logDriverNames(drivers) {
    drivers.forEach(function (driver) {
        console.log(driver.name);
    })
}

function logDriversByHometown(drivers, location) {
   drivers.filter(function (driver) {
    return driver.hometown === location
   }).forEach( function (driver) {
       console.log(driver.name);
   })  
}

function driversByRevenue(drivers) {
    const driverMap = drivers.slice()

    return driverMap.sort(function (a ,b) {
        return a.revenue - b.revenue
    })
}

function driversByName(drivers) {
    const driverMap = drivers.slice()

    return driverMap.sort(function (a ,b) {
        if (a.name < b.name) { 
            return -1; 
        } else if (a.name > b.name) { 
            return 1; 
        } else {
            return 0;
        }
    })
}

function totalRevenue(drivers) {
    return drivers.reduce(function (accumulator, driver) {
        return accumulator + driver.revenue
    } ,0)
}

function averageRevenue(drivers) {
    const revenue = drivers.reduce(function (accumulator, driver) {
        return accumulator + driver.revenue
    }, 0)

    return revenue / drivers.length
}