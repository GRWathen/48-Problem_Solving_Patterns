function sameFrequency(integer1, integer2) {
    let integerString;
    const digitsObject = {};

    integerString = integer1.toString();
    for (let index = 0; index < integerString.length; index++) {
        const letter = integerString[index];
        if (!digitsObject.hasOwnProperty(letter)) {
            digitsObject[letter] = 0;
        }
        digitsObject[letter]++;
    }

    integerString = integer2.toString();
    for (let index = 0; index < integerString.length; index++) {
        const letter = integerString[index];
        if (!digitsObject.hasOwnProperty(letter) || (digitsObject[letter] === 0)) {
            return (false);
        }
        digitsObject[letter]--;
    }

    return (true);
}

/*/
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(22, 222)); // false
console.log();
console.log(sameFrequency(182, 281)); // true
console.log(sameFrequency(34, 14)); // false
console.log(sameFrequency(3589578, 5879385)); // true
console.log(sameFrequency(22, 222)); // false
//*/
