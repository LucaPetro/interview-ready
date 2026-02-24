// 2. *Stack Min*: How would you design a stack which,
// in addition to push and pop,
// has a function min which returns the minimum element?
// Push, pop, and min should all operate in O(1) time.
//

export default class StackMin<T> {
    array: Array<T> = [];
    minimumValues: Array<T> = [];

    constructor() {}

    push(value: T): void {
        this.array.push(value);
        const min = this.min()
        if (
            !min
            || value < min
        ) this.minimumValues.push(value)
    }

    pop(): T | undefined {
        const pop = this.array.pop()
        if (pop === this.min()) {
            this.minimumValues.pop()
        }
        return pop;
    }

    min(): T | undefined {
        return this.minimumValues.at(-1);
    }
}
