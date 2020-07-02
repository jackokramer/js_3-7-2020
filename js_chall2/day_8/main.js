//first digit

function firstDigit(str){
    //write code here.
}

/**
 * TEST SUITE
 */

 describe('firstDigit()', ()=>{
     it('return the first digit in the string', ()=>{
         //arrange
         const str = "var__1__INn2";
         // act
         const result = firstDigit(str);

         // log
         console.log('result: ', result);

         // assert
         expect(result).toBe('1');
     });
 })