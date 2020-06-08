function makeArrayConsec(number){
    let count = 0;
    const sortNums = number.sort((a,b)=> a -b);
    const min = number[0];
    const max = number[number.length-1];
    for(let x = min; x<max; x++){
      if(number.includes(x)){
        count++;
      }
    }
    return count;
}

/**
* Test Suite 
*/
describe('makeArrayConsecutive()', () => {
  it('returns total missing numbers between smallest and largest number', () => {
      // arrange
      const nums = [6, 2, 3, 8];
      
      // act
      const result = makeArrayConsecutive(nums);

      // log
      console.log("result: ", result);
      
      // assert
      expect(result).toBe(3);
  })
});