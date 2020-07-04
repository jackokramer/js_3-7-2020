function largestNum(num){
    //write code here.
    const placeHolder = "9".repeat(num);
    //for(let x = 0; c< num; x++){
    //    placeHolder = placeHolder.concat('99')
    //}
    return parseInt(placeHolder);
}

/**TEST SUITE 
 * 
*/

describe('largestNum()', () => {
    it('returns largest positive integer possible for digit count', ()=> {
        //arrange
        const num = 2;

        //act
        const result = largestNum(num);

        // log
        console.log("result: ", result);

        //assert
        expect(result).toBe(99);
    })
})