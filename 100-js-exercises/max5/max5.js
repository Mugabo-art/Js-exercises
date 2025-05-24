/*Write a function named max5 that receives 5 numbers as parameters and returns the biggest one between them.*/
function max5(nr1, nr2, nr3, nr4, nr5) {
   return Math.max(nr1, nr2, nr3, nr4, nr5);
}
export { max5 };

const result = max5(1, 5, 3, 9, 2);
console.log("The maximum number is:", result); 
