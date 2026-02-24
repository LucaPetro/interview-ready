// 5. *Sort Stack*:

// Write a program to sort a stack such that the smallest items are on the top.
// You can use an additional temporary stack, but you may not copy the elements
// into any other data structure (such as an array).
// The stack supports the following operations: push, pop, peek, and isEmpty.

export default class SortStack<T> {
    array: T[] = []

    constructor() {
    }

    push(value: T): void {
        if (this.isEmpty()) {
            this.array.push(value)
            return;
        }

        let top = this.peek()
        let temp = []
        while (top && value > top) {
            const pop = this.array.pop()
            if (pop) temp.push(pop);
            top = this.peek();
        }

        this.array.push(value)
        let pop
        while (pop = temp.pop()) {
            this.array.push(pop)
        }
    }

    pop(): T | undefined {
        return this.array.pop()
    }

    peek(): T | undefined {
        return this.array.at(-1)
    }

    isEmpty(): boolean {
        return this.array.length === 0
    }
}
