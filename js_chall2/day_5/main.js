function caseInsensitivePalindrome(str){
    //write code here
}

/*
Test Suite
*/

describe('caseInsensitivePalindrome()',()=>{
    it('returns true for a case insensitve palidrome', () =>{
        //arrange
        const array = 'AaBaa';

        //act
        const result = caseInsensitivePalindrome(str);
        //log 
        console.log('result 1:', result);
        //assert
        expect(result).toBe(true);
    });
    it('returns false when not a case insensitive palidrome'), () => {
        //arrange
        const str = 'abac';

        //act
        const result = caseInsensitivePalindrome(str);

        //log
        console.log("result 2: ", result);

        //assert
        expect(result).toBe(false);
    }
});