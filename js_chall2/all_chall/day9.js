function largestNums(num){
    //write code here
    //solution 1
    /*let placeholder = '';
    for(let x = 0; x<num; x++){
        placeholder = placeholder.concat('9');
    } */
    //solution 2
    const  placeholder = '9'.repeat(num);
    return parseInt(placeholder);
}

describe('largestNums()', () =>{
    it('returns the largest possible integer for digit count', ()=>{
        //arrange
        const num = 2;

        // act
        const result = largestNums(num);

        //log
        console.log("result: ", result);

        //assert
        expect(result).toBe(99);
    })
})

/*hints: 
concat()
parseInt()
*/