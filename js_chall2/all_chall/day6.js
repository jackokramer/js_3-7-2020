function encloseBrack(str){
    // write code here
    const solu1 ='(' + str + ')';
    const solu2 = `(${str})`;
    const solu3 = '('.concat(str,')');
    return solu2
}

describe('enclose in brackets()', ()=> {
    it('adds () around a string', ()=> {
        //arrange
        const str = 'Yo'
        //act
        const result = encloseBrack(str);

        //log
        console.log("result: ", result);

        //assert
        expect(result).toBe('(Yo)')
    })
})