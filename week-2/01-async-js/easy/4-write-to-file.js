// ## Write to a file
// Using the fs library again, try to write to the contents of a file.
// You can use the fs library to as a black box, the goal is to understand async tasks.
const fs = require('fs')
fs.readFile('a.txt', 'utf-8', function (err, data) {
  if (err) {
    console.log(err)
    return
  }
  console.log(data)
  const newData = data + "hey it's me"
  fs.writeFile('a.txt', newData, function (err) {
    if (err) {
      console.log(err)
      return
    }
    console.log('print the updated data')
    // setTimeout(function(){
    // console.log('print the updated data')
    // },1000)
  })
})
