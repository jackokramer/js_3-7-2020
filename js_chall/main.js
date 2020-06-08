function evendigitsOnly(number){
    const digits = number.toString().split('');

    return digits.every((digit) => parseInt(digit)%2 === 0);
}

console.log(evendigitsOnly(12));

/** 
 * Test Suite
*/

describe('evendigitsOnly()', ()=>{
    it('returns true only when digits are even', () =>{
        //arrange
        const nums = 248622;
        //act
        const result = evendigitsOnly(nums);
        // log
        console.log('results 1: ', result);

        //asser 
        expect(result).toBe(true);
    })
})

it('returns flase when any digits are odd', ()=>{
    //arrange
    const nums = 642386;

    //act
    const result = evendigitsOnly(nums);

    // log
    console.log('result 2: ', result);

    //assert
    expect(result).toBe(false);
})