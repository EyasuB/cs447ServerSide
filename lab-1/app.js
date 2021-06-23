//Write the necessary Node script to make this code work for all arrays: [1, 2, 3, 4, 5, 6, 7, 8].even(); // [2,4,6,8] [1,2,3,4,5,6,7,8].odd(); // [1,3,5,7] Test your code in Node.JS CLI
let arr = [1, 2, 3, 4, 5, 6];

Array.prototype.even = function () {
    let arr2= [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 0) {
            arr2.push(arr[i])
        }
    }
    return arr2;
}
let temp = arr.even();
console.log(temp);

Array.prototype.odd = function () {
   return this.filter((element) => 
        element % 2 !== 0 )
}
let arr3 = [1, 3, 6, 7, 8, 9];
temp= arr3.odd();
console.log(temp);