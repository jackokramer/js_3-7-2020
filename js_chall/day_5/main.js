function sumAllPrimes(num){
    let primeNum = []
    for(let x = 0; num.length>x; x++){
        if(num[x]%2 === 1){
            num++
        }
    }
    return num;
}

/** 
 * Test Suite
*/

//describe('sumAllPrimes()', () =>{
//    it('all prime numnbers up to the input number', () => {
        //arrange
//        const num = 10;
        //act
 //       const result = sumAllPrimes(num);
 //   }
//    )
//})

console.log(sumAllPrimes(10));
//output should be 7,5,3,2 = 17 or 18 if you count one.

