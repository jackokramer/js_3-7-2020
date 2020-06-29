function arrayReplace(array, elemToReplace, substitutionElem){
    // iterate through the list
    for(let x =0; array.length>x; x++){
        //check for a matching number
        if(array[x] === elemToReplace){
            //update the match
            array[x] = substitutionElem;
        }
    }
    return array;
    //return value
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