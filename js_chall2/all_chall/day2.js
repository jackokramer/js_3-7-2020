function allLongestStr(array){
    //write code here.
    //find the longest
    const longestWord =[];
    let longestLength = 0;

    for(let word of array){
        longestLength = word.length > longestLength ? word.longth : longestLength;
    }
    for(let word of array){
        if(longestLength === word.length){
            longestWord.push(word)
        }
    }
    //return longest string
    return longestLength;
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