function sumAllPrimes(num){
    //solution
    let primeNum = 0
    for(let x = 2; num>x; x++){
        for(let p =2; p<=x; p++){
            if(x===p){
                primeNum +=0;
            }
            if(x%p === 0){
                break
            }
        }
    }
}

console.log(sumAllPrimes(29));

/**
 * Test Suite
 */

 describe('sumAllPrimes()', ()=> {
     it('adds all prime numbers up to the input number', () =>{
         //arrange
        const num = 10;

        //act 
        const result = sumAllPrimes(num);

        //log
        console.log("result: ", result);

        //assert
        expect(result).toBe(17);
     })
 })