//binary Search trees

/**
 * Binary search trees can only have two nodes breaking them off
 */

class binaryNode{ 
    constructor(value){
        this.head = value;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(){
        this.root = null; // can be head if necessary
    }
    //adding a node - smaller nodes to the left higher nodes than root to the right
    add(value){
        let runner = this.root;
        while(runner){
            if(value<=runner.value){
                if(runner.left){
                    runner = runner.left;
                } else{
                    runner.left = new binaryNode(value);
                    return this
                }
            } else{
                if(runner.right){
                    runner = runner.right
                } else{
                    runner.right = new binaryNode(value)
                    return this
                }
            }
        }
        this.root = new binaryNode(value);
        return this
    }
    //finding size
    size(){
        if (this.root == null){
            return 0
        } function sizeHelp(runner){
            if(!runner){
                return 0
            }
            return 1 + sizeHelp(runner.left) + sizeHelp(runner.right);
        }
        return sizeHelp(this.root)
    }
    contains(value){
        let runner = this.root;
        while(runner){
            if(value == runner.value){
                return true
            }
        } if (value < runner.value){
            if(!runner.left){
                return false;
            }
            runner = runner.left
        } else{
            if(!runner.right){
                return false;
            }
            runner = runner.right;
        }
        return false
    }
    min(){
        let runner = this.root;
        let min = this.root.value;
        while(runner.left){
            if(runner.left.value<min){
                min =runner.left.value;
            }
            runner = runner.left;
        }
        return min;
    }
    max(){
        let runner = this.root;
        let max = this.root.value;
        while(runner.right){
            if(runner.right.value>max){
                max =runner.right.value;
            }
            runner = runner.right;
        }
        return max;
    }
    isEmpty(){
        if(this.root){
            return false
        }
        return true
    }
}

//test tree create one
tree = new BST();

//adding some nodes
tree.add(10).add(17).add(9).add(5).add(8)

//testing size
console.log(tree.size);

//searching for a value
console.log(tree.contains(9))

console.log(tree);


/**
 * Parenthesis Valid
 * Create a function tht given an input string, returns a boolean whether the str are valid parenthis always open befoer they close, for ecample "Y(3(p)p(3)r(s", returns true, Given"N(0(p)3" returns false; not every parenthesis is close. GIVEN "N(0)T)0(K," returns false becuase the undelined ")" is premature: thes is nothing open for it to close.
 */

 function parenThesis(str){
    // in order to see str values , need to loop
    // if open paren
    // if close paren
    let count = 0
    for (let x = 0; x<str.length; x++){
        if(str[x] =="("){
            //do something
            count ++
        } else if(str[x] == ")"){
            //do something
            count --
        }
        if(count < 0){
            return false
        }
        if(count==0){
            return true
        }
     return false
    }
 }

 console.log(parenThesis("N(0(p)3"));