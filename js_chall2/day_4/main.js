function arrayReplace(array, elemToReplace, substitutionElem){
    // write code here
}

/*
Test Suite
*/

describe('arrayReplace()',()=>{
    it('adds a boarder around the application', () =>{
        //arrange
        const array = [1,2,1];
        const elemToReplace = 1;
        const substitutionElem = 3;

        //act
        const result = arrayReplace(array, elemToReplace, substitutionElem);
        //log 
        console.log('results:', result);
        //assert
        expect(result).toEqual([3,2,3]);
    });
});