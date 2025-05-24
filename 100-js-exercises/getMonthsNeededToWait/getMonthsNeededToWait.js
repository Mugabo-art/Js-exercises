const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
               'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

function getMonthsNeededToWait(startMonth, targetMonth) {
    const index1 = MONTHS.indexOf(startMonth);
    const index2 = MONTHS.indexOf(targetMonth);
    
    if (index2 >= index1) {
        // If the second month is after the first, then simply substract them
        console.log(`Direct difference: ${index2 - index1} months`);
        return index2 - index1;
    }
    // Otherwise, we first need to to wait until new year
    // and then another `index2` months.
    let monthsUntillNewYear = 12 - index1;
    console.log(`Months until new year: ${monthsUntillNewYear}, then add ${index2} more months`);
    return monthsUntillNewYear + index2;
}

// Example usage:
console.log("Total wait time:", getMonthsNeededToWait('Mar', 'Aug'));  // Direct difference
console.log("Total wait time:", getMonthsNeededToWait('Nov', 'Feb')); // Wrap-around case

export { getMonthsNeededToWait };