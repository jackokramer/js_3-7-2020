function maxMultiple(divsor, bound){
    //write code here.
}

/**TEST SUITE 
 * 
*/

describe('maxMultiple()', () => {
    it('returns largest integer up to boundary', ()=> {
        //arrange
        const divsor = 3;
        const bound = 10;

        //act
        const result = maxMultiple(divisor, bound);

        // log
        console.log("result: ", result);

        //assert
        expect(result).toBe(9);
    })
})