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
}

//test tree
tree = new BST();

//adding some nodes
tree.add(10).add(17).add(9).add(5)

//testing size
console.log(tree.size);

console.log(tree);