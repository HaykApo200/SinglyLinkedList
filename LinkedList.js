class Node {
    constructor(data , next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor(){
        this.head = null;
        this.size = 0;
    }

    addNode(data){

        this.size += 1;
        const newNode = new Node(data);
        if (!this.head) {
            this.head = newNode;
        } else {
            let current = this.head;
            while (current.next !== null) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    addNodeInFront(data){
        this.size += 1;
        let current = this.head;
        let newNode = new Node(data);
        newNode.next = current;
        this.head = newNode;
    }

    delete(data) {
        this.size -= 1;
        if (!this.head) {
            return;
        }
        if (this.head.data === data) {
            this.head = this.head.next;
            return;
        }
        let current = this.head; 
        while (current.next !== null) { 
            if (current.next.data === data) { 
                current.next = current.next.next; 
                return;
            }
            current = current.next; 
        }
    }

    search(data){
        let current = this.head; // 10 20 30
    
        while(current !== null){
            if(current.data === data){ //  
                console.log(true);
                return;
            }else{
                current = current.next // 20 30 
            }
        }
        console.log(false);
    }

    print(){
        let current = this.head;  
        let list = [];
        while(current !== null){ 
            list.push(current.data);
            current = current.next;
        }
        console.log(list.join(' -> '));
        
    }
}



