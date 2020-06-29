function alternatingSums(array){
    // write code here
}

/*
Test Suite
*/

desctibe('alternatingSums()',()=>{
    it('returns alternating sums of even and odd', () =>{
        //arrange
        const num = [50,60,60,46,70];
        //act
        const result = alternatingSums(nums);
        //log 
        console.log('results:', result);
        //assert
        expect(result).toEqual([180, 105]);
    });
});