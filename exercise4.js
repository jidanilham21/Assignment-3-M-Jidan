function arrSum(arr) {
    let maxSoFar = arr[0];
    let maxEndingHere = arr[0];
    let start = 0, end = 0, tempStart = 0;

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > maxEndingHere + arr[i]) {
            maxEndingHere = arr[i];
            tempStart = i;
        } else {
            maxEndingHere += arr[i];
        }

        if (maxEndingHere > maxSoFar) {
            maxSoFar = maxEndingHere;
            start = tempStart;
            end = i;
        }
    }

    return [arr.slice(start, end + 1), maxSoFar];
}
// M JIDAN ILHAM ICHLASUL AMAL
let a = [-2, -3, 4, -1, -2, 1, 5, -3];
console.log(arrSum(a)); // Output: [ [ 4, -1, -2, 1, 5 ], 7 ]
