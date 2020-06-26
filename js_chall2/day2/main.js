function allLongestStrings(array){
    // write code here
}

/*
Test Suite
*/

desctibe('allLongestStrings()',()=>{
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