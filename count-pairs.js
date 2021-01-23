function countPairs(integersArray, number) {
    let pairs = 0;
    const integersObject = {};

    integersArray.forEach(function (integer) {
        if (!integersObject.hasOwnProperty(integer)) {
            integersObject[integer] = 0;
        }
        integersObject[integer]++;
    });

    for (let index = 0; index < integersArray.length; index++) {
        const num = number - integersArray[index];
        //if (num === (number % 2)) {
        if (num === integersArray[index]) {
            continue;
        }
        if (integersObject.hasOwnProperty(num)) {
            pairs++;
            delete integersObject[integersArray[index]];
        }
    }

    return (pairs);
}

/*/
console.log(countPairs([1, 2, 3, 4, 5], 10)); // 0
console.log(countPairs([1, 2, 3, 4, 5], -3)); // 0
console.log(countPairs([4, 6, 2, 7], 10)); // 1
console.log(countPairs([0, -4], -4)); // 1
console.log(countPairs([3, 1, 5, 4, 2], 6)); // 2
console.log(countPairs([1, 2, 3, 0, -1, -2], 0)); // 2
console.log(countPairs([10, 4, 8, 2, 6, 0], 10)); // 3
console.log(); // 
console.log(countPairs([3, 1, 5, 4, 2], 6)); // 2 (1,5 and 2,4)
console.log(countPairs([10, 4, 8, 2, 6, 0], 10)); // 3 (2,8, 4,6, 10,0)
console.log(countPairs([4, 6, 2, 7], 10)); // 1 (4,6)
console.log(countPairs([1, 2, 3, 4, 5], 10)); // 0
console.log(countPairs([1, 2, 3, 4, 5], -3)); // 0
console.log(countPairs([0, -4], -4)); // 1
console.log(countPairs([1, 2, 3, 0, -1, -2], 0)); // 2
//*/
