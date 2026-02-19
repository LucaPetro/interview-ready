// 1. *Is Unique*:

// Implement an algorithm to determine if a string has all unique characters.
// What if you cannot use additional data structures?

export default function isUnique(str: string): boolean {
    for (let i = 0; i < str.length; i++) {
        for (let j = 1 + i; j < str.length; j++) {
            if (str[i] === str[j]) return false;
        }
    }
    return true;
}
