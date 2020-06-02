function addBoarder(array){
    const wall = "*".reapeat(array[0].length +2);
    array.unshif(wall);
    array.push(wall);

    for(let x =1; x < array.length-1; x++){
        arr[x] = "*".concat(array[x], '*');
    }
    return array
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