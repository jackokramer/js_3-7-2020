function confirmEnd(str, ending){
    //write code here
    for(let x = 0; x<str.length; x++){
        if(str.length -1-x === ending){
            return true;
        } else {
            return false
        }
    }
}

/**
 * Test Suite 
*/

describe(`confirm ending()`, ()=>{
    it(`returns true when the ending is at the end of a string`, () => {
        //arrange
        const full = 'abstraction';
        const ending = `action`;

        //log
        console.log(`result 1:`, result);

        //assert
        expect(result).toBe(true);
    });
    if(`returns false when the ending is Not at the end of a string`, () =>{
        //arrange
        const full = 'open sesame';
        const ending ='pen';

        //act
        const result = confirmEnd(full, ending);

        //log
        console.log(`result 2: `, result);

        // assert
        expect(result).toBe('false');
    });
})