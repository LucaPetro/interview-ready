// 1. *Three in One*: Describe how you could use a single array to implement three stacks.

export default class ThreeStacks<T> {
    private array: T[];
    stackLength: number;

    constructor(arrayLength: number) {
        this.array = new Array(arrayLength)
        this.stackLength = Math.floor(arrayLength / 3)
    }

    push(stackNum: number, value: T): void {
        for (
            let i = (this.stackLength - 1) + (this.stackLength * stackNum);
            i >= 0;
            i--
        ) {
            if (!this.array[i]) {
                this.array[i] = value;
                return;
            }
        }
    }

    pop(stackNum: number): T | undefined {
        for (
            let i = 0 + (this.stackLength * stackNum);
            i < this.stackLength + (this.stackLength * stackNum);
            i++
        ) {
            if (this.array[i]) {
                let out = this.array[i];
                delete this.array[i]
                return out;
            }
        }
        return undefined;
    }

    peek(stackNum: number): T | undefined {
        for (
            let i = 0 + (this.stackLength * stackNum);
            i < this.stackLength + (this.stackLength * stackNum);
            i++
        ) {
            if (this.array[i]) {
                return this.array[i];
            }
        }
        return undefined;
    }

    print(): void {
        for (let i = 0; i < this.stackLength * 3; i++) {
            console.log(this.array[i])
        }
    }
}