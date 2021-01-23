function separatePositive(integerArray) {
    let leftIndex = 0;
    let rightIndex = integerArray.length - 1;

    while (leftIndex < rightIndex) {
        if ((integerArray[leftIndex] < 0) && (integerArray[rightIndex] > 0)) {
            const temp = integerArray[leftIndex];
            integerArray[leftIndex] = integerArray[rightIndex];
            integerArray[rightIndex] = temp;
        }
        if (integerArray[leftIndex] > 0) {
            leftIndex++;
        }
        if (integerArray[rightIndex] < 0) {
            rightIndex--;
        }
    }

    return (integerArray);
}

/*/
var arr;
var arr1 = [1, 2, 3];
separatePositive(arr1);
console.log(arr1); // [1, 2, 3]
var arr2 = [-1, -2, -3];
separatePositive(arr2);
console.log(arr2); // [-1, -2, -3]
arr = [2, -1, -3, 6, -8, 10];
separatePositive(arr);
console.log(arr); // 
console.log(arr[0] > 0); // true
console.log(arr[1] > 0); // true
console.log(arr[2] > 0); // true
console.log(arr[3] < 0); // true
arr = [5, 10, -15, 20, 25];
separatePositive(arr);
console.log(arr); // 
console.log(arr[0] > 0); // true
console.log(arr[1] > 0); // true
console.log(arr[2] > 0); // true
console.log(arr[3] > 0); // true
console.log(arr[4]); // -15
console.log();
arr = [2, -1, -3, 6, -8, 10];
separatePositive(arr);
console.log(arr); // [2, 10, 6, -3, -1, -8]
arr = [5, 10, -15, 20, 25];
separatePositive(arr);
console.log(arr); // [5, 10, 25, 20, -15]
arr = [-5, 5];
separatePositive(arr);
console.log(arr); // [5, -5]
arr = [1, 2, 3];
separatePositive(arr);
console.log(arr); // [1, 2, 3]
//*/
