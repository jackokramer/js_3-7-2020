function maxMult(divsor, bound){
    // write code here
    const remainder = bound %divsor;

    return bound - reminader;
    /* My solution
    let num = 0;
    if(num * divsor > bound){
        return num * divsor;
    } else {
        return 'too high'
    }
    */
}

describe('maxMult()', () =>{
    it('returns largest  integer up to a boundary')
    //arrange 
    const divisor = 3;
    const bound = 10;

    //act
    const result = maxMult(divisor, bound);

    //log 
    console.log("result", result);

    //assert
    expect(result).toBe(9);
})