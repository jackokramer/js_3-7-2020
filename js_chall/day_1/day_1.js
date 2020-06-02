function addBoarder(array){
    let boarders =[]
    array.map((item) => boarders.push("*$"))
    const  newArray = [
        "****",
        ...boarders,
        "****"
    ]
    return newArray
}

/***
 * Test Suite 
 */

 describe('addboarder()', () =>{
    it('adds a boarder around entire application', () => {
        //arrange
        const strings = ['abc', 'ded'];
        //act
        const result = addBoarder(strings);

        //log 
        console.log('result:', result);

        //assert 
        expect(result).toEqual(
            ['***',
        "abc",
        'ded',
        "***"]
        );    
    })
 });