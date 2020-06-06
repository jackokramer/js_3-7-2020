function sumAllPrimes(num){
    let primeNum = 0
    for(let x = 2; num>x; x++){
        for(let o =2; o<=x; o++){
            if(x===o){
                primeNum += o;
            }
        if(x%o === 0){
            break;
        }
        //if(num[x]%2 === 1){
        //    num++
        }
    }
    return primeNum;
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

//console.log(sumAllPrimes(10));
console.log(sumAllPrimes(1920213));

//output should be 7,5,3,2 = 17 or 18 if you count one.

