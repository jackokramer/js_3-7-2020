fucntion addTwoDigits(num) {
    const nums = num.toString().split('');

    return parseInt(num[0])+ parseInt(nums[1]);
    // to return more than two digits
    //return nums.reduce((total, value)=>{
    //    return parseInt(total)+ parseInt(value);
    //}, 0)
}

/**
 * Test Suite
 */

 describe('addBoarder()', () =>{
     if('take a two digit number and return the sume of their two numbers ', () =>{
        //arrange
        const num = 29;

        //act
        const result = addTwoDigits(num);

        //log
        console.log('results', result)

        //assert 
        expect(result).toBe(11);
     });
 });