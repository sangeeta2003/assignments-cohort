/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

function wait1(t) {
    return new Promise((resolve=> {
        setTimeout(()=>{
            resolve(`Function wait1(${t}) resolved after ${t} seconds`)
        },t*1000)
      }))
}

function wait2(t) {
    return new Promise((resolve=> {
        setTimeout(()=>{
            resolve(`Function wait2(${t}) resolved after ${t} seconds`)
        },t*1000)
      }))
}

function wait3(t) {
    return new Promise((resolve=> {
        setTimeout(()=>{
            resolve(`Function wait3(${t}) resolved after ${t} seconds`)
        },t*1000)
      }))
}

function calculateTime(t1, t2, t3) {
    const startTime = Date.now();
    let result1,result2,result3;
    return wait1(t1)
    .then(result =>{
        result1 = result
        console.log(result1);
        return wait2(t2);
    })
    
    .then(result =>{
        result2 = result
        console.log(result2);
        return wait3(t3);
    })
    
    .then(result =>{
        result3 = result
        console.log(result);
       const endTime = Date.now()
       const TotalTime = endTime - startTime
    return TotalTime;
    })
}
// take an example
const t1= 1;
const t2= 2;
const t3 =1;
calculateTime(t1,t2,t3)
    .then(result =>{
console.log(`Total time taken: ${result} milliseconds`)
    })
    .catch((error)=>{
console.log(error)
    })
    module.exports = calculateTime