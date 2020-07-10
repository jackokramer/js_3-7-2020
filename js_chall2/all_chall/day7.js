function factorial(num){
    if(num > 0 && num<=1){
        return 1;
    } else{
        return num * factorial(num-1);
    } // recursion example
}

describe('factorial()', ()=>{
    it('returns factorial of number param',() =>{
        //arrange
        const num = 5;

        //act 
        const result = factorial(num);

        //log
        console.log('result:', result);

        //assert
        expect(result).toBe(120);
    })
})