// 3. *Stack of Plates*:

// Imagine a (literal) stack of plates. If the stack gets too high, it might topple.
// Therefore, in real life, we would likely start a new stack when the previous stack
// exceeds some threshold. Implement a data structure SetOfStacks that mimics this.
// SetOfStacks should be composed of several stacks and should create a new stack once
// the previous one exceeds capacity. SetOfStacks.push() and SetOfStacks.pop() should behave
// identically to a single stack (that is, pop() should return the same values as it would if
// there were just a single stack).

// FOLLOW UP: Implement a function popAt(int index) which performs a pop operation on a specific sub-stack.

export default class StackOfPlates<T> {
    stacks: T[][] = []
    max: number;
    full: Set<number> = new Set()

    constructor(capacity: number) {
        this.max = capacity;
    }

    push(value: T): void {
        let hasSpace;
        let idx;
        for (let i = 0; i < this.stacks.length; i++) {
            if (this.full.has(i)) continue;
            if (this.stacks[i].length < this.max) {
                hasSpace = this.stacks[i]
                idx = i;
            }
        }

        if (hasSpace && idx) {
            hasSpace.push(value)
            if (hasSpace.length === this.max) {
                this.full.add(idx)
            }
        } else this.stacks.push([value])
    }

    pop(): T | undefined {
        const lastStack = this.stacks.at(-1)
        if (!lastStack) return;

        this.full.delete(this.stacks.length-1)

        const out = lastStack.pop()
        if (lastStack.length === 0) {
            this.stacks.pop()
        }
        return out;
    }

    popAt(index: number): T | undefined {
        const stack = this.stacks.at(index)
        if (!stack) return;

        this.full.delete(index)

        const out = stack.pop()
        if (stack.length === 0) {
            this.stacks = this.stacks.filter(s => s !== stack)
        }
        return out;
    }
}

