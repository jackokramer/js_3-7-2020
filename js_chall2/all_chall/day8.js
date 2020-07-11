function firstDigit(str){
    //write code here
}

describe('firstDigit()', ()=> {
    it('returns the first digit of a string', ()=>{
        //arrange
        const str = 'var_1___Int3'

        //act
        const result = firstDigit(str)
        //log
        console.log("result: ", result);

        //assert
        expect(result).toBe('1');
    })
})