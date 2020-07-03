//first digit

function firstDigit(str){
    //write code here.
    const strNums = ['1','2','3','4','5','6','7', '8', '9', '10']
    const chars = str.split('');

    for(const char of chars) {
        if(strNums.includes(char)){
            return char;
        }
    }
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