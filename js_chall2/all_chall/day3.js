function alternatingSums(array){
    // write code here
    let odd = 0;
    let even = 0
    for(let x = 0; array.length>x; x++){
        if(x%2 === 1){
        odd++;
        } else{
            even++;
        }
    }
    return [even, odd];
}

/**
 * Test Suite
 */

 describe('alternatingSums()', ()=>{
     it('returns alternating sums of even and odd', () => {
         //arrange
         const nums = [40, 60, 51, 73, 91];
         // act
         const result = alternatingSums(nums);
         //log
         console.log('results: ', results);

         //assert
         expect(result).toEqual([182, 133]);
     })
 })