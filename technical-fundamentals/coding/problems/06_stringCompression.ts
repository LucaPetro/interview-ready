// 6. *String Compression*:

// Implement a method to perform basic string compression using the counts of repeated characters.
// For example, the string aabcccccaaa would become a2blc5a3,
// If the "compressed" string would not become smaller than the original string,
// your method should return the original string.
// You can assume the string has only uppercase and lowercase letters (a - z).

export default function stringCompression (str: string) : string {
  let current = str[0]
  let count = 0 // must start at 0 because the 1st loop increments count
  let out = ''
  for (const char of str) {
    if (char !== current) {
      out += `${current}${count}`
      current = char;
      count = 1
    } else count++;
  }

  out += `${current}${count}` // otherwise skips last letter

  return (out.length > str.length) 
    ? str
    : out
}