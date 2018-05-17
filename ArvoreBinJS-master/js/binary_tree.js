class BinaryTree{
    constructor(){
        this.root=null;
		this.sinze=null;
		this.deep = null;
    }

    insert(element){
        let node = new Node(element);
        if(this.root===null){
            this.root=node;
			this.sinze=1
			this.deep=0
        }else{
            this.insertNode(this.root, node);
        }
    }
    insertNode(root, node){
        if(node.content<root.content){
            if(root.left===null){
                root.left=node;
				this.sinze++;
            }else{
                this.insertNode(root.left, node);
            }
        }else{
            if(root.right===null){
                root.right=node;
				this.sinze++;
            }else{
                this.insertNode(root.right, node);
            }
        }
    }

    inOrderTraverseNode(node, callback){
        if(node!==null){
            this.inOrderTraverseNode(node.left, callback);
            callback(node.content);
            this.inOrderTraverseNode(node.right, callback);
        }
    }
    inOrderTraverse(callback){
        this.inOrderTraverseNode(this.root, callback);
    }

    preOrderTraverseNode(node, callback){
        if(node!==null){
            callback(node.content);
            this.preOrderTraverseNode(node.left, callback);
            this.preOrderTraverseNode(node.right, callback);
        }
    }
    preOrderTraverse(callback){
        this.preOrderTraverseNode(this.root, callback);
    }
	

    postOrderTraverseNode(node, callback){
        if(node!==null){
            this.postOrderTraverseNode(node.left, callback);
            this.postOrderTraverseNode(node.right, callback);
            callback(node.content);
        }
    }
    postOrderTraverse(callback){
        this.postOrderTraverseNode(this.root, callback);
    }
	
	deepTree(){
		math.pow(2,deep);
	}
	
	preOrderShow(root,deep){
		if (deep !== null){
			if(deep == 0 ){
				$('#saida').append(`<span class="ui label">${root.content}</span>`);}
			}
		}
}
	