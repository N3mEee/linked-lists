class LinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    append(value) {
        const newNode = new Node(value);
        let node = this.head;
        this.length++;

        if (this.head === null) {
            return (this.head = newNode);
        }
        while (node.nextNode !== null) {
            node = node.nextNode;
        }
        node.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        this.length++;

        if (this.head === null) {
            return (this.head = newNode);
        }
        newNode.nextNode = this.head;
        this.head = newNode;
    }

    size() {
        if (!this.head) return null;
        return this.length;
    }

    getHead() {
        if (!this.head) return null;
        return this.head;
    }

    tail() {
        if (!this.head) return null;
        let node = this.head;
        while (node.nextNode !== null) {
            node = node.nextNode;
        }
        return node;
    }

    at(index) {
        if (!this.head) return null;
        let node = this.head;
        for (let i = 0; i < index; i++) {
            node = node.nextNode;
        }
        return node;
    }

    pop() {
        if (!this.head) return null;
        if (this.head.nextNode === null) {
            this.head = null;
        }
        this.at(this.size() - 2).nextNode = null;
        this.length--;
    }

    contains(value) {
        if (!this.head) return null;
        let node = this.head;

        while (node.nextNode !== null) {
            if (node.value === value) return true;
            node = node.nextNode;
        }
        return node.value === value ? true : false;
    }

    find(value) {
        if (!this.head) return null;
        let node = this.head;

        while (node.nextNode !== null) {
            if (node.value === value) return node;
            node = node.nextNode;
        }

        return node.value === value ? node : null;
    }

    toString() {
        if (!this.head) return null;
        let node = this.head;
        let result = "";
        while (node.nextNode !== null) {
            result = result.concat(`( ${node.value} ) --> `);
            node = node.nextNode;
        }

        result = result.concat(`( ${node.value} ) --> null`);
        return result;
    }
}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value;
        this.nextNode = nextNode;
    }
}

let linkedList = new LinkedList();
linkedList.append("another node1");
linkedList.append("another node2");
linkedList.append("another node3");
linkedList.append("another node4");
linkedList.append("another node5");
linkedList.append("another node6");
linkedList.append("another node7");
linkedList.append("another node8");

// console.log(linkedList);
// linkedList.pop();
// console.log(linkedList.size());
// console.log(linkedList.getHead());
// console.log(linkedList.tail());
// console.log(linkedList.at(1));
// console.log(linkedList.contains("another node5"));
// console.log(linkedList.find("another node8"));
// console.log(linkedList.toString());
