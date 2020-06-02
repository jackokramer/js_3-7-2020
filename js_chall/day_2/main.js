fucntion addTwoDigits(num){
    //code goes here
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