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
    return drivers.slice().sort(function (a, b) { return a.name.localeCompare(b.name) })
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