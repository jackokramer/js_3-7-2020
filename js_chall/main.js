function evendigitsOnly(number){
    const digits = number.toString().split('');

    return digits.every((digit) => parseInt(digit)%2 === 0);
}

console.log(evendigitsOnly(16));

/** 
 * Test Suite
*/


