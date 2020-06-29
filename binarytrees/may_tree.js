//Big O Notation


class Node{
    constructor(value){ // only thing a node contains is a value
        this.value = value;
        this.right= null;
        this.left = null;
    }
}

let root = new Node(19);

console.log(root);

class BST{
    constructor(value){
        this.root = new Node(value);
    }
    add(value){
        // start a valriabe at this.root monkey in this case
        let monkey = this.root;
        while(monkey){
        if(value > monkey.value){
            if(monkey.right){
                monkey = monkey.right
            } else{
            monkey.right = new Node(value);
            return this
            }
        } else{
            if(monkey.left){
                monkey = monkey.left
            } else{
                monkey.left = new Node(value);
                return this
            }
        }
    }
        return this
    }
    search(value){
        // return true or false in a list
        let monkey = this.root;
        while(monkey){
            if(monkey.value == value){
                return true;
            }
                    // now search to the left or the right
            if(value>monkey.value){
                monkey = monkey.right;
            }
            else{
                monkey = monkey.left;
            }
        }
        return false;
    }
}

first_BST = new BST(19);

console.log(first_BST, "this is my new bst");

first_BST.add(10).add(2).add(14).add(24).add(3).add(9).add(26);

console.log(first_BST, 'this after adding');

console.log(first_BST.search(104));