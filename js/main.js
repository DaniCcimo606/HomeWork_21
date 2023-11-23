
// 1

function toDegree(num, degree) {
    if (degree === 0) {
        return 1;
    } else {
        return num * toDegree(num, degree - 1);
    }
}

console.log(toDegree(4, 2));

// 2

// let myArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

// function removeElement(arr, item) {
//     arr.splice(item - 1, 1);
//     return console.log(arr);
// }

// console.log(removeElement(myArr, 8));

// 3

// let thisKey = 'abcdefghijklmnopqrstuvwxyz0123456789';
// let key = '';

// function generateKey(keySymbol, length) {
//     for (let i = 0; i < length; i++) {
//         let randomIndex = Math.floor(Math.random() * keySymbol.length)
//         key += thisKey.charAt(randomIndex);
//     }
//     return key;
// }

// console.log(generateKey(thisKey, 16));