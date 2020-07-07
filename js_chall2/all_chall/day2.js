function allLongestStr(array){
    //write code here.
}

/**
 * TEST SUITE
 */

 describe('allLongestStr()', ()=>{
     it('returns all the longest strings', ()=>{
         //arrange
         const strings = ['aba', 'aa','ad','vcd','aba','a'];
         //act 
         const result = allLongestStr(strings);
         //log
         console.log('result: ', result);

         //assert
         expect(result).toEqual(['aba', 'vcd', 'aba'])
     })
 })