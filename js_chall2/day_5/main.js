function caseInsensitivePalindrome(str){
    //write code here

    // make a str caseless
    const caseLessSTR = str.toLowerCase();
    //const reversedCaselessSTR = caseLessSTR.split('').reverse().join('');
    let reversedCaselessSTR = '';

    for(let x = caseLessSTR.length - 1; x>= 0; x--){
        reversedCaselessSTR += caseLessSTR[x];   
    }
        return caseLessSTR === reversedCaselessSTR;
}

/*
Test Suite
*/

describe('caseInsensitivePalindrome()',()=>{
    it('returns true for a case insensitve palidrome', () =>{
        //arrange
        const str = 'AaBaa';

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

/* Hints
-join()
-reverse()
-toLowerCase()
-split()
*/