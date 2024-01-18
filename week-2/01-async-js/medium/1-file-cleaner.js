// ## File cleaner

// Read a file, remove all the extra spaces and write it back to the same file.

// For example, if the file input was

// ```
// hello     world    my    name   is       raman
// ```

// After the program runs, the output should be

// ```
// hello world my name is raman

const fs = require('fs');
const file = 'a.txt';
function cleanFile(filePath){
fs.readFile(file,'utf-8',function(err,data){
    if(err){
        console.log(`error reading file ${err.message}`)
    
return;
}
const cleanData = data.replace(/\s+/g, ' ');
fs.writeFile(file,cleanData,'utf-8',(err)=>{
    if(err){
        console.log(`error ${err.message}`)
        return;
    }
    console.log('file cleaned')

});
})
}
cleanFile(file)
