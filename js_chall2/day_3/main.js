function alternatingSums(array){
    // write code here
    let oddSum= 0
    let evenSum=0

    for(let x = 0; x<array.length; x++){
        if(x%2 === 0){
            evenSum += array[x];
        } else {
            oddSum +=array[x];
        }
    }
    return [evenSum, oddSum];
}

/*
Test Suite
*/

describe('alternatingSums()',()=>{
    it('returns alternating sums of even and odd', () =>{
        //arrange
        const nums = [50,60,60,45,70];
        //act
        const result = alternatingSums(nums);
        //log 
        console.log('results:', result);
        //assert
        expect(result).toEqual([180, 105]);
    });
});