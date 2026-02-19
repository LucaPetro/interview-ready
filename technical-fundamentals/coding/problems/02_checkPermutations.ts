// 2. *Check Permutation*:

// Given two strings, write a method to decide if one is a permutation of the other.

export default function checkPermutations(s1: string, s2: string): boolean {
    const dict: Record<string, number> = {}

    for (const char of s1) {
        if (!dict[char]) dict[char] = 1;
        else dict[char]++;
    }


    for (const char of s2) {
        if (!dict[char]) return false;
        else {
            dict[char]--;
            if (dict[char] < 0) return false;
        }
    }

    return true;
}

