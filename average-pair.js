function averagePair(integersArray, targetAverage) {
    const integersObject = {};

    integersArray.forEach(function (integer) {
        if (!integersObject.hasOwnProperty(integer)) {
            integersObject[integer] = 0;
        }
        integersObject[integer]++;
    });

    for (let index = 0; index < integersArray.length; index++) {
        const num = (targetAverage * 2) - integersArray[index];
        if (integersObject.hasOwnProperty(num)) {
            return (true);
        }
    }

    return (false);
}

/*/
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
console.log();
console.log(averagePair([1, 2, 3], 2.5)); // true
console.log(averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8)); // true
console.log(averagePair([-1, 0, 3, 4, 5, 6], 4.1)); // false
console.log(averagePair([], 4)); // false
//*/
