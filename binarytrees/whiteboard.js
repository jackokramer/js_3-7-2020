class Node{
    constructor(value){
        this.value = value;
        this.right = null;
        this.left = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }
    // add me
    add(value){
        let runner = this.root;
        while(runner){
            if(value<=runner.value){
                if(runner.left){
                    runner = runner.left;
                } else {
                    runner.left = new Node(value);
                    return this
                }
            } else{
                if(runner.right){
                    runner = runner.right
                }else{
                    runner.right = new Node(value)
                    return this
                }
            }
        } this.root = new Node(value)// if root is empty
        return this
    }
    //finding size
    size(){
        // base case
        if(this.root == null){
            return 0
        }
        function sizeHelp(){
            if(!runner){
                return 0
            }
            return 1 + sizeHelp(runner.left)+ sizeHelp(runner.right)
        }
        return sizeHelp(this.root)
    }
    // Parens valid
    /**
     * Create a function that given a input string whethere or not the 
     */
}

// creating our test tree
tree = new BST();

// adding some nodes

tree.add(10).add(17).add(8).add(18)

console.log(tree)

    // Parens valid
    /**
     * Create a function that given a input string whethere or not the 
     */

    function parensValid(str){
        // in order to see str vlaues we need to loop
            // if open paren 
            //if close paren
        let count = 0;
        for(let x = 0; x< str.length; x++){
            if(str[x] == `(`){
                // do something
                count++
            }
            else if (str[x] == `)`){
                //do something else
                count --
            }
            if(count < 0){
                return false
            }
        }
        if(count  == 0){
            return true;
        }
        return false
    }

    console.log(parensValid())