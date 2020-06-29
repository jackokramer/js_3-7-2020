function allLongestStrings(array){
    // find the longest length and 
    const longestWords = [];
    let longestLength = 0;
    for(let word of array){
        longestLength = word.length > longestLength ? word.length: longestLength;
    }

    //return the longest strings
    for(let word of array){
        if(longestLength === word.length){
            longestWords.push(word)// error here..
        }
    }
    return longestWords;
}

/*
Test Suite
*/

describe('allLongestStrings()',()=>{
    it('returns all the longest strings', () =>{
        //arrange
        const strings = ['aba','aa','adhd','vcd','abba', 'a'];
        //act
        const result = allLongestStrings(strings);
        //log 
        console.log('results:', result);
        //assert
        expect(result).toEqual(['aba', 'vcd', 'aba']);
    });
});