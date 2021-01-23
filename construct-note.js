function constructNote(messageString, lettersString) {
    const lettersObject = {};

    for (let index = 0; index < lettersString.length; index++) {
        const letter = lettersString[index];
        if (!lettersObject.hasOwnProperty(letter)) {
            lettersObject[letter] = 0;
        }
        lettersObject[letter]++;
    }

    for (let index = 0; index < messageString.length; index++) {
        const letter = messageString[index];
        if (!lettersObject.hasOwnProperty(letter) || (lettersObject[letter] === 0)) {
            return (false);
        }
        lettersObject[letter]--;
    }

    return (true);
}

/*/
console.log(constructNote("abcd", "")); // false
console.log(constructNote("", "abc")); // true
console.log(constructNote("aa", "abcd")); // false
console.log(constructNote("skbjjjvnnd", "fdjlkjfeburevjvnfnsjckjncjdnchbechbadhsd")); // true
console.log(constructNote("abc", "abcd")); // true
console.log();
console.log(constructNote('aa', 'abc')); // false
console.log(constructNote('abc', 'dcba')); // true
console.log(constructNote('aabbcc', 'bcabcaddff')); // true
//*/
