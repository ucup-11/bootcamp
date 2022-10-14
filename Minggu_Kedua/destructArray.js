const fav = ['Seafood', 'Salad' , 'nugget' , 'soup'];
//const [firstFood, secondFood , thirdFood , fourthFood] = fav ;
// console.log(firstFood);
// console.log(secondFood);
// console.log(thirdFood);
// console.log(fourthFood);
// const [,,,thirdFood] = fav;
// console.log(thirdFood);
let myFood = 'Bebek Panggang';
let herFood = 'Seblak';

[,,myFood, herFood]=fav;
console.log(myFood);
console.log(herFood);
