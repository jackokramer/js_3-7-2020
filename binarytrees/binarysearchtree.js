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
}

let tree = new BinarySearchTree();
tree.addNode(78);
tree.addNode(29);
tree.addNode(20);