function arrayReplace(array, elemToReplae, substitutionElem){
    // write code here
    /// itereate through array
    for(let x = 0; x< array.length; x++){
    // check the matching number
        if(array[x] === elemToReplae){
    //update the match
            array[x] = substitutionElem
        }
    }
    return array;
    //let elemToReplae = 1;
    //let substitutionElem = 2;
    //for(let x = 0; array.length>x; x++){
    //    if(x == array[0]){
    //        elemToReplae = substitutionElem;
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