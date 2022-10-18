const array = [2, 4 , 5 , 6];

// const mapArray = array.map( x => x ** 2);
// console.log(mapArray);

// const pangkatArray = array.map(function (i){
//     return i**2;
// })
// console.log(pangkatArray);

// const mapArray2 = array.map(function (i){
//     return i**2;
// });
// console.log(mapArray2);

const mapArray3 = array.map(function (i){
    return i**10 + 11;
});
console.log(mapArray3);

const mapArray4 = array.map(x => x **10 + 11);
console.log(mapArray4);
