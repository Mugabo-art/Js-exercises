/*Write a function named averageOf4Numbers that receives 4 numbers as parameters and returns the mathematical average between them.*/
function averageOf4Numbers(nr1, nr2, nr3, nr4) {
    return (nr1+nr2+nr3+nr4)/4
}

export { averageOf4Numbers };

const result = averageOf4Numbers(10, 20, 30, 40);
console.log("The average is:", result); 