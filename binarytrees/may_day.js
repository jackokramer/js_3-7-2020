// bottom nodes at the end are called leaves

class binaryTree{
    constructor(value){
        this.value = value
        this.left = null;
        this.right = null;
    }
}

let root = new binaryTree(9);

console.log(root);

class BST{
    constructor(value){
        this.root = new binaryTree(value);
    }
    add(value){
        let monkey = this.root;
        while(monkey){
        // there is another value to look at)
        if(value < monkey.value){
            if(monkey.left){
                monkey = monkey.left
            } else{
                monkey.left = new binaryTree(value);
                return this
            }
        } else {
            if(monkey.right){
                monkey = monkey.right
            } else {
                monkey.right = new binaryTree(value); 
                return this
            }
        }
    }
    return this
    }
    search(value){
        let monkey = this.root;
        while(monkey){
            if(monkey.value == value){
                return true
            } else if(value> monkey.value){
                monkey = monkey.right;
            } else {
                monkey = monkey.left
            }
        }
        return false
    }
}

first_BST = new BST(8);

console.log(first_BST, `newly set up`);

first_BST.add(7).add(11).add(17).add(4);

console.log(first_BST, ` after adding a node`)
