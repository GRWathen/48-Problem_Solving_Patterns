function isSubsequence(subsequence, string) {
    if (subsequence.length > string.length) {
        return (false);
    }

    let subIndex = 0;
    for (let index = 0; index < string.length; index ++) {
        if (subsequence[subIndex] === string[index]) {
            subIndex++;
        }
        if (subIndex === subsequence.length) {
            return (true);
        }
    }

    return (false);
}

/*/
console.log(isSubsequence("hello", "hello world")); // true
console.log(isSubsequence("sing", "sting")); // true
console.log(isSubsequence("abc", "abracadabra")); // true
console.log(isSubsequence("abc", "acb")); // false
console.log(isSubsequence("notasubstring", "banana")); // false
console.log(isSubsequence("almost", "almossssss")); // false
console.log(); // 
console.log(isSubsequence('hello', 'hello world')); // true
console.log(isSubsequence('sing', 'sting')); // true
console.log(isSubsequence('abc', 'abracadabra')); // true
console.log(isSubsequence('abc', 'acb')); // false
//*/
