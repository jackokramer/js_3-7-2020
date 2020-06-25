class BSTNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree{
    constructor(){
        this.root = null;
    }
    addNode(val, position=this.root){
        if(this.root == null){
            this.root = new BSTNode(val);
            return;
        }
        else if(val<position.value){
            if(position.left == null){
                position.left = new BSTNode(val);
                return
            }
            else{
                return this.addNode(val, position.left);
            }
        }
        else{//val >= position.val)
            if(position.right == null){
                position.right = new BSTNode(val);
                return;
            }
            else{
                return this.addNode(val, position.right);
            }
    }
    return;
}
}

var tree = new BinarySearchTree();
tree.addNode(29);
tree.addNode(17);
tree.addNode(42);
tree.addNode(20);