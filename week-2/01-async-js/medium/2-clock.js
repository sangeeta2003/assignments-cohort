function clock(date){
    const hour = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const ampm = hour >= 12 ? 'pm' :'am';

const c1 = {
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit'
};
const c2 = {
    hour12 : true,
    hour:'2-digit',
    minute:'2-digit',
    second:'2-digit'
};
const t1 = date.toLocaleTimeString('en-us',c1);
const t2 = date.toLocaleTimeString('en-us',c2);
console.log(`24 hours format ${t1} ${ampm}`)
console.log(`12 hours format ${t2} `)
}
function newClock(){
    const now = new Date();
    clock(now)
    
}
setInterval(newClock,1000)
newClock()
