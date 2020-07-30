function compareInts(num1, num2){
    // write code here
    if(num1<num2){
        return 'less than'
    } else if(num1>num2){
        return 'greater than';
    } else{
        return 'num1 is = num2';
    }
}

/**Test Suite */

describe(`compareIntegers()`, ()=> {
    it(`compares 'less' when the first integer is less than the second num and greater when the first is bigger`, () => {
    // arrange
    const num1 = '12';
    const num2 = "13"
    //act
    const result = compareIntegers(num1, num2);

    //logs
    console.log(`result 1:`, result);

    // assert 
    expect(result).toBe(`less`);
});
    it(`compares 'less' when the first integer is less than the second num and greater when the first is bigger`, () => {
    // arrange
    const num1 = "875";
    const num2 = "799";
    
    // act
    const result = compareIntegers(num1, num2);

    // log
    console.log("result 2: ", result);
    
    // assert
    expect(result).toBe("greater");
    });
    it('returns "equal" when first and second number are the same', () => {
        // arrange
        const num1 = "1000";
        const num2 = "1000";
        
        // act
        const result = compareIntegers(num1, num2);

        // log
        console.log("result 3: ", result);
        
        // assert
        expect(result).toBe("equal");
    });
});