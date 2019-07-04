const stack = require('../learnDataStructures/stack');

class Solution {
    constructor() {
        this.TOKEN = [
            ['{', '(', '['],
            ['}', ')', ']'],
        ]
    }


    isOpen(value) {
        for (let t in this.TOKEN[0]) {
            if (this.TOKEN[0][t] === value) {
                return true;
            }
        }
        return false;
    }

    isMatches(open, close) {
        for (let t = 0; t < this.TOKEN[0].length; t++) {
            if (this.TOKEN[0][t] === open) {

                return close === this.TOKEN[1][t];
            }
        }
    }
    isBalanced(str) {
        for (let i = 0; i < str.length; i++) {
            if (this.isOpen(str.charAt(i))) {
                stack.push(str.charAt(i));
                stack.printStack();

            } else if (stack.isEmpty() || !this.isMatches(stack.pop(), str.charAt(i))) {
                return false;
            }
        }
        return stack.isEmpty();
    }
}

const solution = new Solution();


console.log(solution.isBalanced('{[1]}'));