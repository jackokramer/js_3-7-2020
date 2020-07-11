function firstDigit(str){
    //write code here
    const strNums = ['0','1','2','3','4','5','6','7','8','9']
    const chars  = str.split('');
    for(const char of chars){
        if(strNums.includes(char)){
            return char;
        }
    }
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

//* split(), includes()
//