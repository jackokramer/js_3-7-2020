function encloseInBrackets(str){
    //write code here

    // solution 1
    // solution2 
    // Solutuion3

}

/*
Test Suite
*/

describe('cencloseInBrackets()',()=>{
    it('adds a () around a string', () =>{
        //arrange
        const str = 'Yo';

        //act
        const result = encloseInBrackets(str);
        //log 
        console.log('result:', result);
        //assert
        expect(result).toBe(('Yo'));
    });
});