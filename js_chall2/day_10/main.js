function largestNum(num){
    //write code here.
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