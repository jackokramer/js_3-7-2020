function firstDuplicate(nums){

}


describe('firstDuplicate()', () => {
    it('returns first duplicated value', () =>{
        //arrange
        const nums = [2,3,1,5,3,2];

        //act
        const result = firstDuplicate(nums);

        //log
        console.log("result 1:", result);

        //assert 
        expect(results).toBe(3);
    })
})

it('resturns -1 when no duplicated vlaues', ()=>{
    //arrange
    const result = firstDuplicate(nums);

    //log
    console.log('result 2: ', result);

    //assert
    expect(result).toBe(-1);
})
