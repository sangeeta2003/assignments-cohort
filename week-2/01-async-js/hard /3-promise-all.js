/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(`it take time ${t} wait in wait1`)
    }, t * 1000)
  })
}

function wait2(t) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(`it take time ${t} wait in wait2`)
    }, t * 1000)
  })
}

function wait3(t) {
  return new Promise(function (resolve) {
    setTimeout(() => {
      resolve(`it take time ${t} wait in wait 3`)
    }, t * 1000)
  })
}

function calculateTime(t1, t2, t3) {
  const startTime = Date.now()
  return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then(function () {
    const endTime = Date.now()
    return endTime - startTime
  })
}
// let's take an example
const timeToComplete = calculateTime(2, 3, 4)
timeToComplete
  .then(result => {
    console.log(`total time taken ${result}`)
  })
  .catch(error => {
    console.error(error)
  })

module.exports = calculateTime