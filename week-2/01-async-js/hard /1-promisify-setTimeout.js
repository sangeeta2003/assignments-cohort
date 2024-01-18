/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  return new Promise(resolve => {
    setTimeout(function () {}, 1000)
    resolve(`promise resolved after ${n}`)
  })
}
function setWait(n) {
  console.log(n)
}
wait().then(setWait)
console.log('hey')

module.exports = wait
