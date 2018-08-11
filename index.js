// Code your solution in this file!
function logDriverNames(drivers) {
  drivers.reduce((agg, el, i, arr) => console.log(el.name), [])
}

function logDriversByHometown(drivers, keyword) {
  drivers.reduce((agg, el, i, arr) => {
    if (el.hometown === keyword) {
      console.log(el.name)
    }
  }, [])
}

function driversByRevenue(drivers) {
  newDrivers = [...drivers]
  return newDrivers.sort((a, b) => {
    return (a.revenue - b.revenue)
  })
}

function driversByName(drivers) {
  newDrivers = [...drivers]
  return newDrivers.sort((a, b) => {
    return a.name.localeCompare(b.name)
  })
}

function totalRevenue(drivers) {
  return drivers.reduce((agg, el, i, arr) => {
    return agg + el.revenue
  }, 0)
}

function averageRevenue(drivers) {
  const sum = drivers.reduce((agg, el, i, arr) => {
    return agg + el.revenue
  }, 0)
  return sum / drivers.length
}
