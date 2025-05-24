/*Write a function named concat3 that receives 3 strings as parameters 
(string1, string2, string3) and an additional string named separator.
The function should concatenate the three strings using the provided separator and return the result.*/

function concat3(string1, string2, string3, separator) {
    return `${string1}${separator}${string2}${separator}${string3}`;
}

export { concat3 };

const result = concat3("that","is" , "javascrpit", ",")
console.log(result)