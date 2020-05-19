class BSTNode{
    constructor(val){
        this.value = val;
        this.right =  null;
        this.left = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root=null;
    }
    addNode(val, position = this.root){
        if(this.root == null){
            this.root = new BSTNode(val);
        }
        else if(val <position.value){
            if(position.left == null){
                position.left = new BSTNode(val);
            }
            else{
                return this.addNode(val, position.left)
            }
        }
        else{//val >= position.value
            if(position.right == null){
                position.right = new BSTNode(val);
                return
            }
            else{
                return this.addNode(val, position.right);
            }
        }
        return;
    }
    //size
    size(position = this.root){
        if(position == null){
            return 0;
        }
        return 1 + this.size(position.left) + this.size(position.right);
    }
}

let tree = new BinarySearchTree();
tree.addNode(78);
tree.addNode(29);
tree.addNode(20);
tree.addNode(17);
console.log(tree.size())