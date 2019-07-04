class Stack {
    constructor() {
        this.items = [];
    }

    pop() {
        if (this.items.length === 0)
            return 'Underflow';
        return this.items.pop();
    }
    push(value) {
        this.items.push(value);
    }

    peak() {
        return this.items[this.items.lenth - 1];
    }
    isEmpty() {
        return this.items.length == 0;
    }

    printStack() {
        let str ='';
        this.items.forEach(e => {
            str += e + ' ';
        })
        console.log(str);
    }
}

const stack = new Stack();
module.exports = stack;
