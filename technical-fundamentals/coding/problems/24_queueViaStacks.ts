// 4. *Queue via Stacks*:

// Implement a MyQueue class which implements a queue using two stacks.

export default class MyQueue<T> {
    left: T[] = []
    right: T[] = []

    constructor() {
    }

    enqueue(value: T): void {
        this.#moveLeft()
        this.left.push(value)
    }

    dequeue(): T | undefined {
        this.#moveRight()
        return this.right.pop()
    }

    peek(): T | undefined {
        this.#moveRight()
        return this.left.at(-1) || this.right.at(-1)
    }

    isEmpty(): boolean {
        return this.left.length === 0 && this.right.length === 0;
    }

    #moveLeft() {
        let pop;
        while (pop = this.right.pop()) {
            this.left.push(pop)
        }
    }

    #moveRight() {
        let pop;
        while (pop = this.left.pop()) {
            this.right.push(pop)
        }
    }

}
