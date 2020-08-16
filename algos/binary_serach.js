//Where does this element appear in a list
// Splitter is also known as binary search

//Big O(n) 'Big O of N'
/**
 * O(2n) 7 elements take about 7 lookup
 * O(2n) =  O(n)
 * O(n+1) = O(n);
 * 
 */

class Node{
    constructor(value){
    this.value = value;
    this.left = null;
    this.right = null;
    }
}

class SLL{
    constructor(head){
        this.head = null;
    }

}


/**TYPICAL comparison function */

let defaultCompare = (a, b) =>
    a>b ? 1 : (a<b ? -1: 0);

/**
 * Version 1:
 * O(n)
 * Fixed Memory
 * Loops
 * 
 * NARROW DOWN THE WINDO WHERE YOU ARE LOOKING
 */

let binarySearchWithLoops = (array, element, compare =  defaultCompare) =>{
    let left = 0;
    let right = array.length -1;

    while(left<=right){
        let middle = Math.floor((right + left) /2);

        switch(compare(element, array[middle])){
            case -1:{
                break;
            }
            case 1:{
                left = middle +1;
                break;
            }
            default: {
                return middle;
            }
        }
    }
    return -1;
};

export default binarySearchWithLoops;