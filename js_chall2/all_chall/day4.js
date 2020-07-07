function arrayReplace(array, elemToReplae, substitutionElem){
    // write code here

    // 3 parameters 
}

describe ('arrayReplace()', () => {
    it('adds a border around the entire application', ()=>{
        //arrange
        const array = [1,2,1];
        const elemToReplae = 1;
        const substitutionElem = 3;

        //act
        const result = arrayReplace(array, elemToReplae, substitutionElem);

        //log
        console.log('result: ', result );

        //assert:
        expect(result).toEqual([3,2,3])
    })
})