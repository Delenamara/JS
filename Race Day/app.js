let raceNumber = Math.floor(Math.random() * 1000);
let isRegisteredEarly = true;
let age = 20;

if (age > 18 && isRegisteredEarly) {
    raceNumber += 1000;
}

if (age > 18 && isRegisteredEarly) {
    console.log('Your race will start at 9:30 am.\nYour race number is: ' + raceNumber);
} else if (age > 18 && isRegisteredEarly === false) {
    console.log('Your race will start at 11:00 am.\nYour race number is: ' + raceNumber);
} else if (age < 18) {
    console.log('Your race will start at 12:30 am.\nYour race number is: ' + raceNumber);
} else if (age === 18) {
    console.log('You need to see the registration desk.')
}
