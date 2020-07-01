function encloseInBrackets(str){
    //write code here

    // solution 1
   // const soultion1 ='(' + str + ')'; // es5
    // solution2
   const  solution2 = `(${str})`;  //ES6
    // Solutuion3
    //const solution3 = '('.concat(str, ')');
    //return solution3;
}

/*
Test Suite
*/

describe('cencloseInBrackets()',()=>{
    it('adds a () around a string', () =>{
        //arrange
        const str = 'Yo';

        //act
        const result = encloseInBrackets(str);
        //log 
        console.log('result:', result);
        //assert
        expect(result).toBe('(Yo)');
    });
});