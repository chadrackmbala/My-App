let today = new Date();
let daysList = ['Sunday', 'Monday', 'Tuesday', 'Wendnesday', 'Thursday', 'Friday', 'Saturdey'];
let day = today.getDay();
day = daysList[day];
console.log(`Today is ${day}`);

let hour = today.getHours();
let minutes = today.getMinutes();
let secondes = today.getSeconds();

let beafordAfter;

hour < 12 ? beafordAfter = 'AM' : beafordAfter = 'PM';

if(hour - 12 === 0) {
    if(minutes === 0 && secondes === 0) {
        beafordAfter = 'Noon';
        hour = 12;
    } else {
        beafordAfter = 'PM';
        hour = 12;
    }
}
if(hour === 0) {
    if(minutes === 0 && secondes === 0) {
        beafordAfter = 'Midlnight';
        hour = 0;
    } else {
        beafordAfter = 'AM';
        hour = hour;
    }
}

console.log(`It's ${hour} ${beafordAfter} ${minutes} minutes ${secondes} seconds`);