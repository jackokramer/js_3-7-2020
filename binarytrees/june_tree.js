class treeNode{
    constructor (val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}

let one = new treeNode('1')
let two = new treeNode('2')
let three = new treeNode('3')
let four = new treeNode('4')
let five = new treeNode('5')
let six = new treeNode('6')

one.left = two;
one.right = three;
two.left = four;
two.right = five;
three.right = six;

//console.log(one);

function inOrderPrint(root){
    if(root === null)return;
    inOrderPrint(root.left);
    inOrderPrint(root.right);
    console.log(root.val);
}

inOrderPrint(one);