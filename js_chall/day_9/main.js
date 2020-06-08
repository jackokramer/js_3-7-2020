function properNoun(str){
    //write code here
    const firstChar = str[0].toUpperCase();
    //cap first letter
    const lastLetters = str.slice(1, str.length).toLowerCase();
    //lower rest
    // return them together
    return firstChar.concat(lastLetters);
}

/**
 * Test Suite
 */

 describe('properNoun()', ()=>{
     it('adds proper noun capitalization', ()=>{
         // arrange
         const str = 'pARiS';
         //act
         const result = properNoun(str); 

         //log
         console.log('result 1:', result);
         //asert
         expect(result).toBe('Paris')
        })
        it('properly cased words are still correct', () => {
            // arrange
            const str = 'John';
            
            // act
            const result = properNounCorrection(str);
    
            // log
            console.log("result 2: ", result);
            
            // assert
            expect(result).toBe('John');
        });
 })