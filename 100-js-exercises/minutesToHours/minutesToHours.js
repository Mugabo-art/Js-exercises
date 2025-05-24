/*Write a function named minutesToHours that receives a number of minutes as parameter and returns a number representing the same amount of time but in hours.*/
function minutesToHours(minutes) {
    return minutes / 60
}

export { minutesToHours };

const hours = minutesToHours(1200);
console.log("1200 minutes =", hours, "hours");