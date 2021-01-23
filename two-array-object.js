function twoArrayObject(keyArray, valueArray) {
    const object = {};

    keyArray.forEach(function (key, index) {
        if (valueArray[index] === undefined) {
            object[key] = null;
        }
        else {
            object[key] = valueArray[index];
        }
    });

    return (object);
}

/*/
console.log(twoArrayObject(["a", "b", "c"], [1, 2, 3])); // { a: 1, b: 2, c: 3 }
console.log(twoArrayObject(["a", "b", "c"], [1, 2, 3, 4])); // { a: 1, b: 2, c: 3 }
console.log(twoArrayObject(["a", "b", "c", "d"], [1, 2, 3])); // { a: 1, b: 2, c: 3, d: null }
console.log();
console.log(twoArrayObject(['a', 'b', 'c', 'd'], [1, 2, 3])); // {'a': 1, 'b': 2, 'c': 3, 'd': null}
console.log(twoArrayObject(['a', 'b', 'c'], [1, 2, 3, 4])); // {'a': 1, 'b': 2, 'c': 3}
console.log(twoArrayObject(['x', 'y', 'z'], [1, 2])); // {'x': 1, 'y': 2, 'z': null}
//*/
