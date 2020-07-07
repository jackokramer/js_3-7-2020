function caseInsensitvePalin(str){
    // write code here
    //make str caseless
    const caslessStr = str.toLowerCase();
    //const reverseStr = caslessStr.split(''.reverse().join(''));
    //return caslessStr === reverseStr;
    //second solution
    let reverseStr = '';

    for(let x = caslessStr.length; x>=0; x++){
        reverseStr += caselessStr[x];
    }
    return caselessStr === reverseStr;
}

describe('caseInsensitvePalin()', () => {
    it('returns true for a case insensitve palindrome', ()=>{
        //arrange
        const str= 'AaBaa';

        //act
        const result = caseInsensitvePalin(str);

        //log
        console.log('result 1:', result);

        //assert
        expect(result).toBe(true);
    })
    it('returns false when not a case insensitve palindrome', ()=>{
        //arrange
        const str = 'abac';
        //act
        const result = caseInsensitvePalin(str);

        //log
        console.log('result 2:', result);

        //assert
        expect(result).toBe(false);
    })
})