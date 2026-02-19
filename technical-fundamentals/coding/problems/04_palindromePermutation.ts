// 4. *Palindrome Permutation*: 

// Given a string, write a function to check if it is a permutation of a palindrome.
// A palindrome is a word or phrase that is the same forwards and backwards. A permutation is a rearrangement of letters.
// The palindrome does not need to be limited to just dictionary words.
// ```
// EXAMPLE
// Input: Tact Coa
// Output True (permutations: "taco cat", "atco cta", etc.)
// ```

export default function palindromePermutation (str: string): boolean {
    str = str.toLowerCase().split(' ').join('')
    const hash: Record<string, number> = {}
    for (const char of str) {
        if (!hash[char]) hash[char] = 1;
        else hash[char]++;
    }

    let tolerance = 0;
    for (const char in hash) {
        if (hash[char] % 2 !== 0) {
            tolerance++;
            if (tolerance > 1) return false;
        }
    }

    return true;
}
