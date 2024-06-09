function arrayMap(arr, callback) {
    const mappedArray = [];
    for (let i = 0; i < arr.length; i++) {
        mappedArray.push(callback(arr[i], i));
    }
    return mappedArray;
}

// Exemple d'utilisation
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = arrayMap(numbers, (num) => num * num);
console.log(squaredNumbers); // [1, 4, 9, 16, 25]