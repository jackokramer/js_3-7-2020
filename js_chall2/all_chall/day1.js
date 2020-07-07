//function add(param1, param2){
    // write code here
//    return param1+param2;
//}

function add(...nums){
    let sum = 0;
    nums.forEach((num)=> sum+=num);
    return sum;
}

/**
 * Test Suite
 */

 describe('add()', ()=>{
     it('adds two numbers', ()=>{
         const num1 = 1;
         const num2 = 2;

         // act
         const result = add(num1,num2);

         //log
         console.log('results: ', result)

         //assert
         expect(result).toBe(3)
     });
     it('adds any amount of numbers', ()=> {
         //arrange
         const num1 = 1;
         const num2 = 2;
         const num3 = 3;

         //act 
         const result = add(num1,num2,num3);
         //log
         console.log("result", result);
         // assert
         expect(result).toBe(6);
     })
 })