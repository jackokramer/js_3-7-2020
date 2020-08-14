function isTandemRepeat(str1, str2) {
    //  write code here.
    if( str1 === str2){
        return true
    } else{
        return false;
    }
}

console.log(isTandemRepeat('here', 'here'))




/**
* Test Suite 
*/
describe('isTandemRepeat()', () => {
    it('returns true when first half matches second half', () => {
        // arrange
        const str = "tandemtandem";
        
        // act
        const result = isTandemRepeat(str);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(true);
    });
    
    it('returns false when first half does NOT matches second half', () => {
        // arrange
        const str = "qqq";
        
        // act
        const result = isTandemRepeat(str);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(false);
    });    
});