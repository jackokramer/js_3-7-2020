function factorialNum(num){
    //write code here
    if(num>0 && num<=1){
        return 1;
    } else{
        return num * factorialNum(num-1);
    }
    // Dylan's solution
/*    let sum = 1;
    for(let x = 1; x<=num; x++){
        sum*=x;
    }
    return sum;
    */
}

/*
Test Suite
*/

describe('factorialNum()',()=>{
    it('returns factorial of number param', () =>{
        //arrange
        const num = 5;

        //act
        const result = factorialNum(num);
        //log 
        console.log('result:', result);
        //assert
        expect(result).toBe(120);
    });
});