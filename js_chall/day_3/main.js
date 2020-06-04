function firstDuplicate(nums){
    const firstDup = {};
    // ittereate through nums
    for(let num of nums){
        if(firstDup.hasOwnProperty(num)){
            // return duplicated num
            return num
        }
        //return duplcated nums
        firstDup[num] = num;
    }

    // don't find a duplicate return -1
    return -1;
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
