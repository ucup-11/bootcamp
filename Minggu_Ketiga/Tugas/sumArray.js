const array = [7, 4 , 5 , 6];

// const sumArray = array.reduce((sumOf , arrayItem) => {
//     return sumOf + arrayItem 
// }, );

// console.log(sumArray);

let sumArray = 0 ;
for (i = 0 ; i < array.length ; i++){
    sumArray += array[i]
}

console.log(sumArray);