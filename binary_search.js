// binary tree consists of nodes with left right pointers.
// What makes it specific is how the values are stored in the tree with low values than parent node on the left and greater or equal values than the parent on the right.

// lowest levels called the leaves.

class BSTNode{
    constructor(val){
        this.value = val;
        this.left = null;
        this.right = null;
    }
}
class BinarSearchTree{
    constructor(){
        this.root = null;
    }
    addNode(val, position = this.root){
        if(this.root == null){
            this.root - new BSTNode(val);
        }
        else if(val < position.value){
            if(position.left = null){
                position.left = new BSTNode(val);
            }
            else{
                return this.addNode(val, position.left);
            }
        }
        else{
            if(position.right == null){
                position.right = new BSTNode(val);
            }
            else{
                return this.addNode(val, position.right);
            }
        }
        return;
    }
}

var tree = new BinarSearchTree();
tree.addNode(27);
tree.addNode(19);
tree.addNode(78);
tree.addNode(20);