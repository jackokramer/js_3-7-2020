function add(param1, param2){
    // write code here
}

/*
Test Suite
*/

desctibe('add()',()=>{
    it('adds two numbers', ()=>{
        //arange
        const num1 = 1;
        const num2 = 2;

        //act 
        const result = add(num1, num2);

        //log
        console.log('result: ', result);

        //assert
        expect(result).toBe(3)
    });
    xit('adds any amount of numbers', ()=>{
        // arrange
        const num1 = 1;
        const num2 = 2;
        const num3 = 3;

        //act
        const result = add(num1, num2, num3);

        console.log('result: ', result);

        //assert 
        expect(result).toBe(6);
    });
});