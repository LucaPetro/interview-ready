// 5. *One Away*:

// There are three types of edits that can be performed on strings:
// insert a character, remove a character, or replace a character.
// Given two strings, write a function to check if they are one edit (or zero edits) away.

export default function isOneAway(str1: string, str2: string): boolean {
	const lendiff = Math.abs(str1.length - str2.length);
	if (lendiff > 1) return false;

	let diffcount = 0 - lendiff;
	for (let i = 0; i < str1.length; i++) {
		if (
			(str1[i] && str2[i]) &&
			str1[i] !== str2[i]
		) {
			diffcount++;
		}
	}

	return diffcount < 2
}

